import { Link } from "react-router-dom";
import { useIntersect } from "../hooks/useIntersect";
import { projects, type Project } from "../data/projects";

export function Projects() {
  const { ref, visible } = useIntersect<HTMLDivElement>();

  return (
    <section className="projects" id="work">
      <div className="container">
        <div ref={ref} className="section-header">
          <span className={`section-label fade-up${visible ? " visible" : ""}`}>
            Work
          </span>
          <h2
            className={`section-title fade-up${visible ? " visible" : ""}`}
            style={{ transitionDelay: "80ms" }}
          >
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
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useIntersect<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`project-card fade-up${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="project-header">
        <span className="project-company">{project.company}</span>
        <h3 className="project-title">{project.title}</h3>
        {/* <span className="project-role">{project.role}</span> */}
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
        {project.disciplines.map((m) => (
          <span key={m} className="metric-tag">
            {m}
          </span>
        ))}
        <span className="project-divider" aria-hidden="true" />
        {project.tags.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>
      <Link
        to={`/projects/${project.slug}`}
        className="project-card-link"
        aria-label={`View ${project.title} case study`}
      >
        View Project <span className="project-card-arrow">→</span>
      </Link>
    </div>
  );
}
