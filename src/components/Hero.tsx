import { useEffect, useState } from "react";
import { SocialLinks } from "./SocialLinks";
import { HeroStage } from "./HeroStage";
import { skills } from "../data/skills";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="top">
      <div className={`hero-inner container${loaded ? " hero-loaded" : ""}`}>
        <div className="hero-copy">
          <span className="hero-eyebrow">Design Engineer</span>
          <h1 className="hero-name">
            Blake
            <br />
            Anderson
          </h1>
          <p className="hero-tagline">
            I design interfaces and the systems behind them, from Figma to
            production code running on hundreds of sites.
          </p>
          <div
            className={`hero-skills fade-up${loaded ? " visible" : ""}`}
            style={{ transitionDelay: "280ms" }}
          >
            {skills.map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </div>
          <div
            className={`hero-social fade-up${loaded ? " visible" : ""}`}
            style={{ transitionDelay: "360ms" }}
          >
            <SocialLinks />
          </div>
        </div>
        <div className="hero-stage-wrap">
          <HeroStage />
        </div>
      </div>
    </section>
  );
}
