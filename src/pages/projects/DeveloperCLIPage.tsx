import { ProjectLayout } from '../../components/ProjectLayout'
import { projects } from '../../data/projects'

const project = projects.find(p => p.slug === 'developer-experience-cli')!

const contributions = [
  {
    label: 'Plugin architecture',
    text: 'Helped architect the CLI around a plugin-based model, allowing different Arc XP products to expose their own workflows through a shared developer interface.',
  },
  {
    label: 'Bundle deployment',
    text: 'Built plugins for uploading and deploying PageBuilder bundles, turning a previously manual and fragmented process into a single guided command.',
  },
  {
    label: 'Themes block forking',
    text: 'Built workflows for forking reusable Themes blocks into local projects, making it easy for teams to customize platform components without starting from scratch.',
  },
  {
    label: 'Schema tooling',
    text: 'Added commands for pulling custom schemas from Arc XP environments, giving developers reliable access to content model definitions across projects.',
  },
  {
    label: 'Interactive + automation modes',
    text: 'Designed command flows that balance usability with automation: interactive enough for developers running commands locally, structured enough to support unattended usage in CI/CD pipelines.',
  },
]

export function DeveloperCLIPage() {
  return (
    <ProjectLayout project={project}>
      <p className="project-page-description">
        Arc XP CLI began as an effort to make complex platform workflows easier to run, repeat, and automate. I helped architect the CLI around a plugin-based model that allowed different Arc XP products to expose their own workflows through a shared developer interface. My work focused on turning manual, error-prone tasks into guided and scriptable commands, including PageBuilder bundle deployment, Themes block forking, and custom schema retrieval.
      </p>

      <section className="project-section">
        <h2 className="project-section-title">What Was Built</h2>
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
        <h2 className="project-section-title">In Action</h2>
        <div className="cli-gif-wrap">
          <img src="/projects/arcxp-cli/arcxp-cli.gif" alt="Arc XP CLI demo" />
        </div>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Package</h2>
        <p className="project-page-description" style={{ marginBottom: 16 }}>
          The CLI is published to npm and available to Arc XP developers.
        </p>
        <a
          href="https://www.npmjs.com/package/@arcxp/cli"
          target="_blank"
          rel="noopener noreferrer"
          className="project-page-back"
        >
          View on npm →
        </a>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Blocksmith</h2>
        <p className="project-page-description" style={{ marginBottom: 0 }}>
          Beyond task automation, I prototyped Blocksmith: an unpublished AI-powered block generator built on top of the CLI. Blocksmith explored how developers could generate Arc XP-compatible frontend artifacts from natural language prompts, using AI to create blocks, layouts, content sources, and related files that followed platform conventions.
        </p>
        <p className="project-page-description" style={{ marginBottom: 0 }}>
          The prototype demonstrated how the CLI could evolve from a task runner into a foundation for AI-assisted development workflows, reducing the time and platform knowledge required to scaffold new Arc XP frontend code.
        </p>
      </section>
    </ProjectLayout>
  )
}
