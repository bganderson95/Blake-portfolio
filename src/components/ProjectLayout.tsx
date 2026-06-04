import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { type Project } from '../data/projects'
import { Footer } from './Footer'

type Props = {
  project: Project
  children: React.ReactNode
}

export function ProjectLayout({ project, children }: Props) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <main className="project-page">
        <div className="project-page-inner container">
          <Link to="/#work" className="project-page-back">← Back</Link>
          <div className="project-page-header">
            <span className="project-company">{project.company}</span>
            <h1 className="project-page-title">{project.title}</h1>
            <span className="project-role">{project.role}</span>
          </div>
          <div className="project-page-tags">
            {project.disciplines.map(m => (
              <span key={m} className="metric-tag">{m}</span>
            ))}
            <span className="project-divider" aria-hidden="true" />
            {project.tags.map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
