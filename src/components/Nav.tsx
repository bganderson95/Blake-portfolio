import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const THEMES = [
  "dusk",
  "eclipse",
  "bloom",
  "deepsea",
  "frost",
  "ember",
] as const;

type Theme = (typeof THEMES)[number];

const THEME_PREVIEWS: Record<Theme, [string, string, string]> = {
  dusk:    ["#fef5ec", "#0d7a70", "#1a0e06"],
  eclipse: ["#0c0814", "#f43f5e", "#e8e0f8"],
  bloom:   ["#f4f9f0", "#c4280c", "#101a0c"],
  deepsea: ["#071520", "#ff7050", "#c8e8ee"],
  frost:   ["#e6eff9", "#d47010", "#091828"],
  ember:   ["#0e0a06", "#e8780a", "#f5ede0"],
};

function PaletteIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="13.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125C12.92 18.75 12.75 18.42 12.75 18c0-.92.75-1.667 1.667-1.667H16c3.314 0 6-2.686 6-6C22 6.77 17.523 2 12 2z" />
    </svg>
  );
}

function Logo() {
  return (
    <svg
      viewBox="0 0 210 210"
      aria-hidden="true"
      className="nav-logo-svg"
    >
      <path fill="var(--clr-text-2)" d="M71.81,200.25a61.73,61.73,0,0,0,55.83-88,28.35,28.35,0,0,0-17.56,26.23,38.39,38.39,0,1,1-32.4-37.89A71.85,71.85,0,0,1,95.17,81.39a61.84,61.84,0,0,0-54.3,3.72l-7.51,4.36V10H10V200.17H33.36V187.59L40.87,192A61.7,61.7,0,0,0,71.81,200.25Z" />
      <path fill="var(--clr-accent)" d="M168.31,191.71l7.5-4.33v12.79h23.36V141.29c.05-.91.07-1.85.08-2.79v-.36c0-.91,0-1.81-.07-2.71V71.72A61.8,61.8,0,0,0,137.44,10H109.08V33.36h28.36a38.41,38.41,0,0,1,38.37,38.36V89.34L168.31,85a61.74,61.74,0,0,0-92.5,53.12v.43a61.91,61.91,0,0,0,5.92,26,28.38,28.38,0,0,0,17.35-26.15,38.37,38.37,0,0,1,76.73,0h0a38.44,38.44,0,0,1-38.36,38,37.76,37.76,0,0,1-5.52-.4,71.88,71.88,0,0,1-17.48,19.38,61.83,61.83,0,0,0,53.87-3.74Z" />
    </svg>
  );
}

export function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(() => window.scrollY > 20);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const theme =
      saved && THEMES.includes(saved)
        ? saved
        : THEMES[Math.floor(Math.random() * THEMES.length)];
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
  });

  const nextIndex = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  const nextTheme = THEMES[nextIndex];
  const nextColors = THEME_PREVIEWS[nextTheme];

  const cycleTheme = () => {
    document.documentElement.classList.add("theme-transitioning");
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setCurrentTheme(nextTheme);
    setTimeout(
      () => document.documentElement.classList.remove("theme-transitioning"),
      400,
    );
  };


  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav-inner">
        {isHome ? (
          <a href="#top" className="nav-logo" aria-label="Home">
            <Logo />
          </a>
        ) : (
          <Link to="/" className="nav-logo" aria-label="Home">
            <Logo />
          </Link>
        )}
        <nav className="nav-links" aria-label="Main navigation">
          {isHome ? (
            <>
              <a href="#work">Work</a>
              <a href="#design">Design</a>
              <a href="#writing">Writing</a>
            </>
          ) : (
            <>
              <Link to="/#work">Work</Link>
              <Link to="/#design">Design</Link>
              <Link to="/#writing">Writing</Link>
            </>
          )}
          <NavLink to="/about">About</NavLink>
        </nav>
        <nav className="nav-links-mobile" aria-label="Mobile navigation">
          {isHome ? <a href="#work">Work</a> : <Link to="/#work">Work</Link>}
          <NavLink to="/about">About</NavLink>
        </nav>
        <button
          className="nav-theme-btn"
          onClick={cycleTheme}
          aria-label={`Switch to ${nextTheme} theme`}
          title={`Next: ${nextTheme}`}
        >
          <PaletteIcon />
          <span className="nav-theme-swatches" aria-hidden="true">
            {nextColors.map((color, i) => (
              <span
                key={i}
                className="nav-theme-swatch"
                style={{ background: color }}
              />
            ))}
          </span>
        </button>
      </div>
    </header>
  );
}
