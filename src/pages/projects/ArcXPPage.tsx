import { ProjectLayout } from '../../components/ProjectLayout'
import { projects } from '../../data/projects'

const project = projects.find(p => p.slug === 'arc-themes-blocks')!

const contributions = [
  {
    label: 'Component library',
    text: 'Maintained and extended a Lerna monorepo of 70+ individually versioned React npm packages. Each block is a self-contained unit — consuming ANS content data, PageBuilder configuration, and Arc Themes Components — and deployed independently to hundreds of publisher sites.',
  },
  {
    label: 'Design token pipeline',
    text: 'Built and maintained the pipeline that compiles structured JSON design token files into production CSS. Tokens are organized into three layers — global primitives, semantic aliases, and responsive breakpoint overrides — giving publishers a systematic way to express their brand without touching component internals.',
  },
  {
    label: 'Admin UI',
    text: 'Owned the PageBuilder editor UI that lets publishers configure blocks and page templates without code. Responsible for making complex layout and style controls feel approachable for non-technical users across hundreds of newsrooms.',
  },
  {
    label: 'Visual quality',
    text: 'Maintained Storybook documentation for the full component library and integrated Chromatic for automated visual regression testing, catching unintended style changes before they reached client sites.',
  },
  {
    label: 'Accessibility',
    text: 'Components were built to meet accessibility standards out of the box, since publishers rely on the block library as their baseline. That meant proper ARIA roles, keyboard navigation, and screen reader support across the component set.',
  },
  {
    label: 'RTL & logical properties',
    text: 'The library serves publishers in multiple languages and regions, including right-to-left markets. CSS was written using logical properties (inline/block instead of left/right) throughout, ensuring layouts adapt correctly without per-locale overrides.',
  },
  {
    label: 'Core Web Vitals',
    text: 'Performance was a first-class concern given the scale of traffic across client sites. Components were built with Core Web Vitals in mind — minimizing layout shift, optimizing render-blocking resources, and keeping bundle size lean across the npm package set.',
  },
  {
    label: 'Release coordination',
    text: 'Managed versioned releases across multiple consuming teams and downstream publisher environments, balancing backwards compatibility with the pace of ongoing feature development.',
  },
]

export function ArcXPPage() {
  return (
    <ProjectLayout project={project}>
      <p className="project-page-description">
        Arc Themes Blocks is the component system at the heart of Arc XP's publishing platform, used by hundreds of media organizations — including The Washington Post, the Chicago Tribune, and news publishers across Europe, Latin America, and Asia — to build and manage their digital products. I owned the block library across its full lifecycle: architecture, token pipeline, admin UI, visual testing, and multi-team release coordination.
      </p>

      <section className="project-section">
        <h2 className="project-section-title">The System</h2>
        <p className="project-page-description" style={{ marginBottom: 0 }}>
          Each Arc Themes Block is a React component that consumes structured ANS content data and PageBuilder editor settings, then renders into a publisher's site using a layered CSS design token system. Publishers can customize the visual language of every component — colors, typography, spacing, breakpoints — through token overrides without forking or modifying component code.
        </p>
        <p className="project-page-description" style={{ marginBottom: 0 }}>
          The library is structured as a Lerna monorepo, with each block versioned and published to npm independently. Downstream projects pin to specific versions, which meant releases required careful coordination to avoid breaking changes across a large and varied client base.
        </p>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">What I Owned</h2>
        <div className="token-outputs">
          {contributions.map(({ label, text }) => (
            <div key={label} className="token-output">
              <span className="token-output-file">{label}</span>
              <p className="token-output-desc">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Source</h2>
        <p className="project-page-description" style={{ marginBottom: 16 }}>
          Both repositories are open source. Arc Themes Components is the shared primitive layer consumed by every block in the library — and made available to clients building their own custom blocks on top of the platform.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a
            href="https://github.com/WPMedia/arc-themes-blocks"
            target="_blank"
            rel="noopener noreferrer"
            className="project-page-back"
            style={{ marginBottom: 0 }}
          >
            arc-themes-blocks on GitHub →
          </a>
          <a
            href="https://github.com/WPMedia/arc-themes-components"
            target="_blank"
            rel="noopener noreferrer"
            className="project-page-back"
            style={{ marginBottom: 0 }}
          >
            arc-themes-components on GitHub →
          </a>
        </div>
      </section>
    </ProjectLayout>
  )
}
