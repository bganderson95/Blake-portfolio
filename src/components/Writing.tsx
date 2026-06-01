import { useIntersect } from '../hooks/useIntersect'

const pieces = [
  {
    title: 'Capstone Research Paper',
    badge: 'PDF',
    description:
      'A systems engineering perspective on complex problem spaces, written during my time at the University of Virginia School of Engineering.',
    url: 'https://s3.us-east-2.amazonaws.com/blakeganderson.com/Capstone%20Paper.pdf',
  },
  {
    title: 'Using AI for Feature Development',
    badge: 'Blog',
    description:
      'How I integrated LLM tooling into a production frontend development workflow — from prompt design to production-ready UI artifact generation.',
    url: 'https://dev.arcxp.com/blog/using-ai-for-feature-development/',
  },
  {
    title: 'Arc XP CLI: New Features',
    badge: 'Blog',
    description:
      "A deep dive into new developer tooling capabilities I shipped for the Arc XP platform's CLI — consolidating common workflows into single-command automation.",
    url: 'https://dev.arcxp.com/blog/arcxp-cli-new-features/',
  },
]

export function Writing() {
  const { ref, visible } = useIntersect<HTMLDivElement>()

  return (
    <section className="writing" id="writing">
      <div className="container">
        <div ref={ref} className="section-header">
          <span className={`section-label fade-up${visible ? ' visible' : ''}`}>Writing</span>
          <h2 className={`section-title fade-up${visible ? ' visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            Thinking Out Loud
          </h2>
        </div>
        <div className="writing-list">
          {pieces.map((piece, i) => (
            <WritingCard key={piece.title} piece={piece} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WritingCard({ piece, index }: { piece: typeof pieces[0]; index: number }) {
  const { ref, visible } = useIntersect<HTMLAnchorElement>()

  return (
    <a
      ref={ref}
      href={piece.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`writing-card fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="writing-content">
        <span className="writing-badge">{piece.badge}</span>
        <h3 className="writing-title">{piece.title}</h3>
        <p className="writing-description">{piece.description}</p>
      </div>
      <span className="writing-arrow" aria-hidden="true">↗</span>
    </a>
  )
}
