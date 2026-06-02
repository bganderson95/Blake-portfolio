import { ProjectLayout } from '../../components/ProjectLayout'
import { projects } from '../../data/projects'

const project = projects.find(p => p.slug === 'figma-arc-xp-token-exporter')!

const outputs = [
  {
    file: 'global.json',
    description: 'Primitive key-value tokens — colors, spacing, typography. Variable paths are flattened into Arc-compatible keys (e.g. global/color/primary → color-primary).',
  },
  {
    file: 'alias.json',
    description: 'Breakpoint-scoped semantic aliases that reference global tokens. Figma alias relationships are converted into Arc token references (e.g. $global.color-primary).',
  },
  {
    file: 'breakpoints.json',
    description: 'Responsive breakpoint definitions derived from Variable Collection modes.',
  },
]

export function FigmaTokenExporterPage() {
  return (
    <ProjectLayout project={project}>
      <p className="project-page-description">{project.description}</p>

      <section className="project-section">
        <h2 className="project-section-title">Background</h2>
        <p className="project-page-description" style={{ marginBottom: 0 }}>
          Arc XP Themes is a component-based design system used by media publishers to style and manage websites built on the Arc XP platform. It drives styles across blocks, pages, and templates through a structured design token bundle — JSON files that define primitive values, semantic aliases, and responsive breakpoints.
        </p>
        <p className="project-page-description" style={{ marginBottom: 0 }}>
          Figma is where design decisions live, but Arc XP Themes expects those decisions in a specific JSON format under <code className="project-inline-code">themes/styles/</code>. Manually translating Figma Variables into that format is tedious and error-prone — especially as token counts grow and breakpoints multiply.
        </p>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">How It Works</h2>
        <p className="project-page-description">
          The plugin reads local Figma Variables, classifies them by collection name and naming convention, and exports a complete token bundle as a ZIP. Number variables support multiple export modes — raw, px, rem, or inferred from the token name — giving teams control over unit handling without needing string overrides for every value.
        </p>
        <div className="token-outputs">
          {outputs.map(({ file, description }) => (
            <div key={file} className="token-output">
              <span className="token-output-file">{file}</span>
              <p className="token-output-desc">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Source</h2>
        <p className="project-page-description" style={{ marginBottom: 16 }}>
          The plugin is open source. Built with TypeScript, the Figma Plugin API, esbuild, and JSZip.
        </p>
        <a
          href="https://github.com/bganderson95/figma-design-token-exporter"
          target="_blank"
          rel="noopener noreferrer"
          className="project-page-back"
        >
          View on GitHub →
        </a>
      </section>
    </ProjectLayout>
  )
}
