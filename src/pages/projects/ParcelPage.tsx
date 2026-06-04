import { ProjectLayout } from '../../components/ProjectLayout'
import { projects } from '../../data/projects'

const project = projects.find(p => p.slug === 'parcel-chrome-extension')!

const logoBreakdown = [
  {
    label: 'The letter',
    text: 'The mark is a "P", the first letter of Parcel and a natural starting point for a logo I\'ve been sketching variations of since I was a kid.',
  },
  {
    label: 'The concept',
    text: 'The "P" is drawn to evoke the side profile of a rolled-up scroll or folded newspaper. The curved bowl suggests a sheet of paper curling back on itself, tying the mark directly to the world of print and news.',
  },
]

const technical = [
  {
    label: 'Authentication',
    text: 'Google Sign-In is handled natively through the Chrome Identity API, a natural fit for a browser extension. On first login, the extension authenticates with Google OAuth and syncs the user\'s identity to the backend, creating an account with a wallet balance of zero.',
  },
  {
    label: 'Dynamic icon states',
    text: 'The extension monitors every tab in real time and reflects context through three icon states: black when the active site has no Parcel partnership, blue when the user is on a supported publisher\'s site, and green when the current URL matches an article pattern. URL matching uses a two-level approach: a fast string check to identify the publisher, followed by regex matching to confirm the URL is an article rather than a homepage or section front.',
  },
  {
    label: 'Wallet & purchases',
    text: 'Users top up a wallet balance and spend from it per article. The backend tracks purchases by user, so the extension can check on load whether the current article has already been unlocked. Publisher access is delivered via a site-specific cookie injected by the extension after a confirmed purchase. In practice, the prototype validated this by injecting a cookie from my own active subscription, which toggled the publisher\'s logged-in state and granted access to paywalled content.',
  },
  {
    label: 'Backend API',
    text: 'Five resource groups (users, login, purchases, wallets, app info) deployed to AWS API Gateway via Serverless Framework. The data model is deliberately minimal: a User record with a wallet balance, and a Purchase record linking a userId to an articleUrl with a timestamp and price.',
  },
  {
    label: 'Gift links',
    text: 'Users would be able to purchase a shareable gift link for any article, letting them pass paywalled content to friends or colleagues without requiring them to have a Parcel account. A natural fit for how people already share news.',
  },
  {
    label: 'Subscription nudge',
    text: 'As a user\'s monthly spend through Parcel approached the cost of a publisher\'s full subscription, the extension would surface a contextual prompt comparing what they\'d spent against what a subscription would cost. The goal was to help publishers convert high-frequency micropayment readers into subscribers at the right moment.',
  },
]

export function ParcelPage() {
  return (
    <ProjectLayout project={project}>
      <p className="project-page-description">{project.description}</p>

      <section className="project-section">
        <h2 className="project-section-title">The Problem</h2>
        <p className="project-page-description" style={{ marginBottom: 0 }}>
          News paywalls present an all-or-nothing proposition: subscribe for full access or read nothing. For casual readers who follow a story across multiple outlets, maintaining several subscriptions is expensive and impractical.
        </p>
        <p className="project-page-description" style={{ marginBottom: 0 }}>
          Parcel was an exploration of a middle path: micropayments for individual articles, similar to buying a single song instead of an album.
        </p>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Branding</h2>
        <div className="hybrd-logo-breakdown">
          <div className="hybrd-logo-img-wrap" style={{ background: '#f0ede8' }}>
            <img src="/gallery/Parcel-logo.svg" alt="Parcel logo" />
          </div>
          <div className="hybrd-logo-details">
            {logoBreakdown.map(({ label, text }) => (
              <div key={label} className="hybrd-logo-detail">
                <span className="hybrd-logo-detail-label">{label}</span>
                <p className="hybrd-logo-detail-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">The Approach</h2>
        <div className="hybrd-dev-section">
          <p className="project-page-description" style={{ marginBottom: 0 }}>
            Rather than treat this as a pure thought experiment, I built a working technical prototype to validate the core mechanics: could a Chrome extension detect a paywalled article, authenticate a user, process a microtransaction, and unlock access, all within the browser?
          </p>
          <div className="hybrd-dev-video">
            <img src="/projects/parcel/Parcel Screen.png" alt="Parcel extension UI" style={{ borderRadius: 16, width: '100%' }} />
          </div>
        </div>
      </section>

      {/* <section className="project-section">
        <h2 className="project-section-title">Prototype</h2>
        <p className="project-page-caption">The following shows a simple prototype flow for unlocking a paywalled article.</p>
        <div className="figma-prototype-embed figma-prototype-embed--wide">
          <iframe
            src="https://embed.figma.com/proto/vNV3R56QDM9Y7LNkdyilBU/plugin?node-id=2027-87&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2027%3A87&page-id=0%3A1&hide-ui=1&embed-host=share"
            allowFullScreen
          />
        </div>
      </section> */}

      <section className="project-section">
        <h2 className="project-section-title">What Was Built</h2>
        <p className="project-page-description">
          The extension is built with React (popup UI) and a Chrome Manifest V3 service worker (background script).
        </p>
        <div className="token-outputs">
          {technical.map(({ label, text }) => (
            <div key={label} className="token-output">
              <span className="token-output-file">{label}</span>
              <p className="token-output-desc">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Why It Stopped</h2>
        <p className="project-page-description" style={{ marginBottom: 0 }}>
          The concept requires direct partnerships with news publishers to issue per-user access cookies. There is no technical workaround for that dependency. Without a business arrangement in place, the unlock mechanism cannot work at scale. The prototype validated the browser-side mechanics cleanly, but the distribution and partnership problem made further development premature.
        </p>
      </section>
    </ProjectLayout>
  )
}
