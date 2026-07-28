import { useEffect, useState } from 'react'
import { SocialLinks } from './SocialLinks'
import { skills } from '../data/skills'

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero" id="top">
      <div className={`hero-inner container${loaded ? ' hero-loaded' : ''}`}>
        <span className="hero-eyebrow">Design Engineer</span>
        <h1 className="hero-name">
          Blake<br />Anderson
        </h1>
        <p className="hero-tagline">
          I build component systems used by dozens of media organizations
          across hundreds of their sites, from the design tokens to the
          production code.
        </p>
        <div className="hero-actions">
          <a href="/resume/" className="btn btn-secondary btn--sm">
            View Resume
          </a>
        </div>
        <div className={`hero-skills fade-up${loaded ? ' visible' : ''}`} style={{ transitionDelay: '280ms' }}>
          {skills.map(s => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>
        <div className={`hero-social fade-up${loaded ? ' visible' : ''}`} style={{ transitionDelay: '360ms' }}>
          <SocialLinks />
        </div>
      </div>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>
    </section>
  )
}
