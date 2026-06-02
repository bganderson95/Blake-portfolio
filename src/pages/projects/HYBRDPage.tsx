import { ProjectLayout } from "../../components/ProjectLayout";
import { projects } from "../../data/projects";

const project = projects.find((p) => p.slug === "hybrd-fitness-app")!;

const logoBreakdown = [
  {
    label: "Form",
    text: 'Two completely identical, balanced shapes come together to form a single “H” — a visual metaphor for the two disciplines the app unites.',
  },
  {
    label: "Color",
    text: "Yellow represents cardio; blue represents strength. These two colors aren't just logo choices — they carry through the entire app as a design motif, giving each workout type a clear visual identity.",
  },
  {
    label: "Heartbeat",
    text: 'The crossbar of the "H" breaks into a zig-zag — a nod to a heart rate monitor, reinforcing the cardio side of the brand.',
  },
  {
    label: "Plates",
    text: "The outer edges of each vertical stroke feature small notched forms that echo the weight plates on a dumbbell or barbell, anchoring the strength side.",
  },
];

export function HYBRDPage() {
  return (
    <ProjectLayout project={project}>
      <p className="project-page-description">{project.description}</p>

      <section className="project-section">
        <h2 className="project-section-title">Branding</h2>
        <div className="hybrd-logo-breakdown">
          <div className="hybrd-logo-img-wrap">
            <img src="/gallery/Hybrd Logo Transparent.png" alt="HYBRD logo" />
          </div>
          <div className="hybrd-logo-details">
            {logoBreakdown.map(({ label, text }) => (
              <div key={label} className="hybrd-logo-detail">
                <span className="hybrd-logo-detail-label">{label}</span>
                <p className="hybrd-logo-detail-text">{text}</p>
              </div>
            ))}
            <p className="hybrd-logo-footnote">
              This concept was ultimately retired in favor of something simpler — but it was a fun problem to design through.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Prototype</h2>
        <div className="figma-prototype-embed">
          <iframe
            src="https://embed.figma.com/proto/uAmjQEu0owkSOBEHs8zQh6/Hybrd?node-id=20-1929&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A1929&page-id=0%3A1&hide-ui=1&embed-host=share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="project-section">
        <h2 className="project-section-title">Frontend Development</h2>
        <div className="hybrd-dev-section">
          <div className="hybrd-dev-text">
            <p className="project-page-description" style={{ marginBottom: 0 }}>
              Beyond the design work, I participated in a HYBRD internal hackathon — and won. My submission tackled post-workout benchmark tracking: after completing a workout, the app automatically compared each activity result against the user's existing personal bests and updated any benchmarks that were beaten.
            </p>
            <p className="project-page-description" style={{ marginBottom: 0 }}>
              The centerpiece of the feature was a confetti cannon that fired whenever a user improved their HYBRD score. It was the kind of detail that made an otherwise data-heavy moment feel like a genuine celebration. The confetti cannon still ships in the app today.
            </p>
          </div>
          <div className="hybrd-dev-video">
            <video
              src="/projects/ScreenRecording_06-02-2026 13-02-09_1.mov"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
