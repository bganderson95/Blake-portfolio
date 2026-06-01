import { useIntersect } from '../hooks/useIntersect'

type Project = {
  title: string
  company: string
  role: string
  description: string
  metrics: string[]
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Arc XP Component Ecosystem',
    company: 'The Washington Post / Arc XP',
    role: 'Senior → Staff Software Engineer',
    description:
      'Owned a library of 70+ React npm packages powering hundreds of client newsroom websites — including component architecture, the admin UI for site configuration, and a design token pipeline that compiled token-based JSON files into production CSS. Maintained quality through Storybook documentation, Chromatic visual regression testing, and coordinated release workflows across multiple consuming teams.',
    metrics: ['70+ packages', '100s of millions of pageviews', '100+ client sites'],
    tags: ['React', 'TypeScript', 'CSS', 'Design Tokens', 'Storybook', 'Chromatic', 'npm'],
  },
  {
    title: 'Developer Experience CLI',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Built a Node.js/TypeScript CLI for Arc XP developer workflows — handling environment setup, authentication, and common platform tasks through both interactive and unattended automation modes. Designed with CLI ergonomics in mind: progressive disclosure, clear error messages, and secure credential handling via token-based auth with AWS integration. Eliminated error-prone manual setup steps and made a complex platform accessible to developers across the organization.',
    metrics: ['Interactive + automation modes', 'Secure AWS token handling', 'Production CLI'],
    tags: ['Node.js', 'TypeScript', 'CLI', 'AWS', 'Developer Tooling'],
  },
  {
    title: 'HYBRD Fitness App',
    company: 'Independent',
    role: 'Product Designer',
    description:
      'Designed wireframes and high-fidelity interactive prototypes for a fitness application from zero to complete user experience — information architecture, onboarding flows, workout builder, and core navigation. The product was accepted into Y Combinator, validating the design vision through clear UX flows and polished Figma prototypes that communicated the product concept without a line of production code.',
    metrics: ['Y Combinator accepted', 'Zero-to-complete UX'],
    tags: ['Figma', 'Prototyping', 'Wireframing', 'UX Research', 'Information Architecture'],
  },
  {
    title: 'LLM UI Code Generator',
    company: 'The Washington Post / Arc XP',
    role: 'Staff Software Engineer',
    description:
      'Built an LLM-driven code generation workflow using AWS Bedrock and Lambda that translates structured content inputs into five production-ready UI component types compatible with Arc XP\'s rendering engine. Framed as a developer productivity tool: the goal was to reduce a specific, high-friction authoring step with structured outputs that plug directly into the existing platform — not a demo, but something production teams actually use.',
    metrics: ['5 UI component types', 'Sub-minute generation', 'Production integration'],
    tags: ['React', 'TypeScript', 'AWS Bedrock', 'Lambda', 'Prompt Design'],
  },
]

export function Projects() {
  const { ref, visible } = useIntersect<HTMLDivElement>()

  return (
    <section className="projects" id="work">
      <div className="container">
        <div ref={ref} className="section-header">
          <span className={`section-label fade-up${visible ? ' visible' : ''}`}>Work</span>
          <h2 className={`section-title fade-up${visible ? ' visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            Selected Projects
          </h2>
        </div>
        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useIntersect<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`project-card fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="project-header">
        <span className="project-company">{project.company}</span>
        <h3 className="project-title">{project.title}</h3>
        <span className="project-role">{project.role}</span>
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-btn"
          aria-label={`Visit ${project.title}`}
        >
          ↗
        </a>
      )}
      <p className="project-description">{project.description}</p>
      <div className="project-footer">
        {project.metrics.map(m => (
          <span key={m} className="metric-tag">{m}</span>
        ))}
        <span className="project-divider" aria-hidden="true" />
        {project.tags.map(t => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  )
}
