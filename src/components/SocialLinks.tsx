function EmailIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function BehanceIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.5 4H2v16h5.8c2.7 0 4.7-1.7 4.7-4.4 0-1.5-.7-2.9-1.9-3.6.9-.8 1.4-2 1.4-3C12 6.3 10 4 7.5 4zm-.3 6.2H5V7h2.2c.9 0 1.5.6 1.5 1.6s-.6 1.6-1.5 1.6zM5 17v-4h2.8c1 0 1.7.8 1.7 2s-.7 2-1.7 2H5zM17.5 8C15 8 13 10 13 12.5S15 17 17.5 17c2.1 0 3.7-1.1 4.3-2.8h-2.5c-.3.5-.9.8-1.8.8-1.1 0-1.9-.7-2-1.8H22v-.5c0-2.6-1.9-4.7-4.5-4.7zm-2 4c.2-1.1 1-1.8 2-1.8s1.8.7 1.9 1.8h-3.9zM15 5v1.5h5V5h-5z" />
    </svg>
  )
}

const links = [
  { label: 'Email',    href: 'mailto:bganderson95@gmail.com',              icon: <EmailIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/blakeganderson',  icon: <LinkedInIcon /> },
  { label: 'GitHub',   href: 'https://github.com/blakeganderson',           icon: <GitHubIcon /> },
  { label: 'Behance',  href: 'https://www.behance.net/bganderson',          icon: <BehanceIcon /> },
]

export function SocialLinks() {
  return (
    <div className="social-links">
      {links.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
          className="social-link"
          aria-label={label}
          title={label}
        >
          {icon}
        </a>
      ))}
    </div>
  )
}
