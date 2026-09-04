/* TIMING/EASING are exported alongside the component (rather than split into
   a separate file) so they stay at the top of this file, one hop from the
   code that uses them — that costs this file React Fast Refresh's
   component-only-export optimization, which only affects dev-mode hot
   reload, not correctness. */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { PaletteIcon } from "./PaletteIcon";

/* ==========================================================================
   HERO STAGE — "a design system assembling itself"

   A deliberately plain, unstyled button is turned into a polished one, four
   tokens at a time, with the CSS typing itself in step with it:

     Beat 1  TOKENS  → the four token icons stagger in, and the plain
                       skeleton button fades in beneath them (grey fill,
                       square corners, cramped padding — the "before")
     Beat 2  APPLY   → one token at a time: the icon pulses and its CSS line
                       types in character by character, and the instant the
                       line finishes, that exact property lands on the
                       button — color → the label sharpens from grey to ink,
                       radius → corners round, space → padding opens,
                       accent → the accent tint, border and icon arrive.
                       The next line starts a beat (betweenLines) later, so
                       the hand-off is sequential, never overlapping.
     Beat 3  SETTLE  → the finished button settles with one confident
                       ease-out (shadow arrives, small scale settle)
     Rest            → a gentle hold. The button is real: clicking it cycles
                       the site's actual six themes, and the whole page
                       (this stage included) re-themes with it.

   The code panel can be read literally: the declarations it types are the
   ones actually applied to the button. Each `var(--btn-*)` is a real
   component-level alias defined on .hero-btn, resolved from the site's
   global tokens (--clr-text-1, --r-md, --clr-accent) — the same alias layer
   the Arc XP token-pipeline case study describes. Colors always follow
   whichever theme is live; there's no local override.

   Beat 2's schedule is derived, not hardcoded: each line's duration is its
   own character count × charMs, so the timeline stays correct if the token
   values change. Tune pace with SPEED, cadence with TIMING, feel with
   EASING; all three reach the stylesheet as --hero-* custom properties on
   the stage root, so this file stays the single source of truth.

   Performance note: entrances, pulses and the settle are transform/opacity
   only. The four property applications are the exception by design — they
   ARE the demo, so `radius` really animates border-radius and `space`
   really animates padding. Each is a single one-shot transition on one small
   element, so the layout/paint cost is contained; faking them with
   transforms would distort the type and corners and destroy the point.
   ========================================================================== */

export const EASING = {
  /** Strong, precise ease-out. Entrances and the final settle. */
  outExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
  /** Steep, front-loaded. The property applications — crisp, no overshoot. */
  apply: "cubic-bezier(0.32, 0.72, 0, 1)",
  /** Softer ease-out. Press/hover feedback on the finished button. */
  outQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
} as const;

/**
 * Global speed dial. 1 = brisk; higher is slower. Every value in TIMING is
 * multiplied by it, so the choreography keeps its proportions and the whole
 * sequence stretches evenly — the one number to turn when tuning overall
 * pace. At 3, the sequence runs ~10s to settled.
 */
export const SPEED = 3;

const scale = (ms: number) => Math.round(ms * SPEED);

export const TIMING = {
  /** Beat 1: token icons in. */
  tokenStagger: scale(65),
  tokenDuration: scale(480),
  /** The plain "before" button fades in under the tokens. */
  buttonInAt: scale(700),
  /** Beat 2: the first line starts typing here. */
  applyStart: scale(900),
  /** Per-character typing speed — quick, so the line reads as it lands. */
  charMs: scale(14),
  /** Gap between one line finishing and the next starting. */
  betweenLines: scale(260),
  /** How long a property takes to animate onto the button once applied. */
  applyDuration: scale(420),
  /** The token icon's pulse, and the code line's accent flash on completion. */
  pulseDuration: scale(420),
  codeLandDuration: scale(700),
  /** Beat 3: after the last line lands. */
  settleGap: scale(300),
  settleDuration: scale(520),
  /** The completion pop on the finished button. Punctuation rather than a
      beat, so it is deliberately NOT scaled by SPEED — same reasoning as
      press feedback: it should feel identical however slowly the sequence
      itself is paced. */
  buttonLandDuration: 480,
} as const;

/* Each token: the icon in the tray, the CSS declaration it types, and the
   class it adds to the button when it lands (see .hero-btn in index.css). */
const TOKENS = [
  { id: "color", prop: "color", value: "var(--btn-text)" },
  { id: "radius", prop: "border-radius", value: "var(--btn-radius)" },
  { id: "space", prop: "padding", value: "var(--btn-space)" },
  { id: "accent", prop: "background", value: "var(--btn-accent)" },
] as const;

type Segment = { text: string; cls?: string };

/* Each line is split into styled segments so it can be revealed one
   character at a time across them without losing syntax colouring. */
const LINES: { segments: Segment[]; length: number }[] = TOKENS.map((t) => {
  const segments: Segment[] = [
    { text: "  " },
    { text: t.prop, cls: "hero-code-key" },
    { text: ": " },
    { text: t.value, cls: "hero-code-val" },
    { text: ";" },
  ];
  return {
    segments,
    length: segments.reduce((n, s) => n + s.text.length, 0),
  };
});

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function HeroStage() {
  const reducedMotion = usePrefersReducedMotion();
  const [runId, setRunId] = useState(0);

  const stageVars: Record<string, string> = {
    "--hero-ease-out": EASING.outExpo,
    "--hero-ease-apply": EASING.apply,
    "--hero-ease-press": EASING.outQuad,
    "--hero-token-ms": `${TIMING.tokenDuration}ms`,
    "--hero-apply-ms": `${TIMING.applyDuration}ms`,
    "--hero-settle-ms": `${TIMING.settleDuration}ms`,
    "--hero-pulse-ms": `${TIMING.pulseDuration}ms`,
    "--hero-land-ms": `${TIMING.codeLandDuration}ms`,
    "--hero-btn-land-ms": `${TIMING.buttonLandDuration}ms`,
  };

  return (
    <div className="hero-stage" style={stageVars as React.CSSProperties}>
      <div className="hero-stage-header">
        <span className="hero-stage-filename">/* blake-anderson.css */</span>
        {!reducedMotion && (
          <button
            type="button"
            className="hero-stage-replay"
            onClick={() => setRunId((n) => n + 1)}
            aria-label="Replay the animation"
            title="Replay Animation"
          >
            {/* Re-keyed on each run so the icon's spin restarts every click. */}
            <span
              key={runId}
              className={`hero-stage-replay-icon${runId ? " spin" : ""}`}
            >
              <ReplayIcon />
            </span>
          </button>
        )}
      </div>

      {/* Remounted on replay rather than reset in place: fresh DOM nodes have
          no transition history, so nothing animates backwards out of its
          finished state before the new run begins. */}
      <StageSequence key={runId} reducedMotion={reducedMotion} />
    </div>
  );
}

function ReplayIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}

function StageSequence({ reducedMotion }: { reducedMotion: boolean }) {
  const { nextTheme, cycleTheme } = useTheme();

  // Reduced motion: every phase starts already done, so the fully-styled
  // button and the complete CSS render on the first paint — no assembly.
  const [tokensIn, setTokensIn] = useState(reducedMotion);
  const [buttonIn, setButtonIn] = useState(reducedMotion);
  const [activated, setActivated] = useState(() =>
    TOKENS.map(() => reducedMotion),
  );
  const [applied, setApplied] = useState(() => TOKENS.map(() => reducedMotion));
  const [typed, setTyped] = useState(() =>
    LINES.map((l) => (reducedMotion ? l.length : 0)),
  );
  const [settled, setSettled] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));
    const flip = (
      set: React.Dispatch<React.SetStateAction<boolean[]>>,
      i: number,
    ) => set((prev) => prev.map((v, idx) => (idx === i ? true : v)));

    at(0, () => setTokensIn(true));
    at(TIMING.buttonInAt, () => setButtonIn(true));

    // Walk the lines in sequence: each starts after the previous one has
    // finished typing plus a beat, so the hand-off never overlaps.
    let cursor = TIMING.applyStart;
    LINES.forEach((line, i) => {
      const typingMs = line.length * TIMING.charMs;

      at(cursor, () => {
        flip(setActivated, i);
        let n = 0;
        const id = setInterval(() => {
          n += 1;
          setTyped((prev) => prev.map((v, idx) => (idx === i ? n : v)));
          if (n >= line.length) {
            clearInterval(id);
            // The line is done — the property lands on the button now.
            flip(setApplied, i);
          }
        }, TIMING.charMs);
        intervals.push(id);
      });

      cursor += typingMs + TIMING.betweenLines;
    });

    at(cursor - TIMING.betweenLines + TIMING.settleGap, () => setSettled(true));

    return () => {
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, [reducedMotion]);

  return (
    <div className="hero-stage-body">
      <CodePane typed={typed} applied={applied} />
      <div className="hero-stage-visual">
        <TokenTray tokensIn={tokensIn} activated={activated} />
        <div className={`hero-btn-slot${buttonIn ? " visible" : ""}`}>
          <button
            type="button"
            onClick={cycleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            className={
              "hero-btn" +
              applied
                .map((on, i) => (on ? ` is-${TOKENS[i].id}` : ""))
                .join("") +
              (settled ? " is-settled" : "")
            }
          >
            <PaletteIcon size={14} />
            Switch theme
          </button>
        </div>
      </div>
    </div>
  );
}

function CodePane({ typed, applied }: { typed: number[]; applied: boolean[] }) {
  return (
    <pre className="hero-code-pane" aria-hidden="true">
      <code>
        <span className="hero-code-line">
          <span className="hero-code-sel">.switch-theme</span> {"{"}
        </span>
        {LINES.map((line, i) => (
          <span
            key={TOKENS[i].id}
            className={`hero-code-line hero-code-token${applied[i] ? " done" : ""}`}
          >
            <TypedText segments={line.segments} chars={typed[i]} />
            {typed[i] > 0 && typed[i] < line.length && (
              <span className="hero-code-caret" />
            )}
          </span>
        ))}
        <span className="hero-code-line">{"}"}</span>
      </code>
    </pre>
  );
}

/** Reveals the first `chars` characters across a line's styled segments. */
function TypedText({
  segments,
  chars,
}: {
  segments: Segment[];
  chars: number;
}) {
  const parts: { key: number; text: string; cls?: string }[] = [];
  let taken = 0;
  for (let i = 0; i < segments.length && taken < chars; i++) {
    const seg = segments[i];
    const take = Math.min(seg.text.length, chars - taken);
    if (take > 0) {
      parts.push({ key: i, text: seg.text.slice(0, take), cls: seg.cls });
    }
    taken += take;
  }

  return (
    <>
      {parts.map((p) => (
        <span key={p.key} className={p.cls}>
          {p.text}
        </span>
      ))}
    </>
  );
}

function TokenTray({
  tokensIn,
  activated,
}: {
  tokensIn: boolean;
  activated: boolean[];
}) {
  return (
    <div className="hero-token-tray" aria-hidden="true">
      {TOKENS.map((t, i) => (
        <div
          key={t.id}
          className={`hero-token${tokensIn ? " visible" : ""}${activated[i] ? " active" : ""}`}
          style={{
            transitionDelay: tokensIn ? `${i * TIMING.tokenStagger}ms` : "0ms",
          }}
        >
          <span className={`hero-token-icon hero-token-icon--${t.id}`} />
          <span className="hero-token-label">{t.id}</span>
        </div>
      ))}
    </div>
  );
}
