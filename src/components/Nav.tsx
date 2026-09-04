import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { type Theme } from "../data/themes";
import { useTheme } from "../hooks/useTheme";
import { PaletteIcon } from "./PaletteIcon";

const THEME_PREVIEWS: Record<Theme, [string, string, string]> = {
  sifnos:  ["#fef5ec", "#0d7a70", "#1a0e06"],
  ursula:  ["#0c0814", "#f43f5e", "#e8e0f8"],
  curacao: ["#f3eecc", "#cc1468", "#0a1e3c"],
  wahoowa: ["#071520", "#ff7050", "#c8e8ee"],
  snowspeeder: ["#e6eff9", "#d47010", "#091828"],
  ewok:        ["#0e0a06", "#e8780a", "#f5ede0"],
};

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

  const { nextTheme, cycleTheme } = useTheme();
  const nextColors = THEME_PREVIEWS[nextTheme];

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
              <a href="#writing">Writing</a>
            </>
          ) : (
            <>
              <Link to="/#work">Work</Link>
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
