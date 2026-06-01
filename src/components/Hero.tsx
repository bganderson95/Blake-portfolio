import { useEffect, useState } from 'react'
import { SocialLinks } from './SocialLinks'

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero" id="top">
      <div className={`hero-inner container${loaded ? ' hero-loaded' : ''}`}>
        <span className="hero-eyebrow">Software Engineer</span>
        <h1 className="hero-name">
          Blake<br />Anderson
        </h1>
        <p className="hero-tagline">
          I build frontend systems, developer tools, and thoughtful interfaces
          that help teams ship better digital products.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">View My Work</a>
          <a
            href="/Blake_Anderson_Resume_Design_Engineering.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Download Resume
          </a>
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
