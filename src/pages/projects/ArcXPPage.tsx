import { ProjectLayout } from '../../components/ProjectLayout'
import { projects } from '../../data/projects'

const project = projects.find(p => p.slug === 'arc-xp-component-ecosystem')!

export function ArcXPPage() {
  return (
    <ProjectLayout project={project}>
      <p className="project-page-description">{project.description}</p>
      <div className="project-page-placeholder">
        <p>More details coming soon.</p>
      </div>
    </ProjectLayout>
  )
}
