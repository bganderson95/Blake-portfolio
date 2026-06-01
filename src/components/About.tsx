import { useIntersect } from "../hooks/useIntersect";
import { SocialLinks } from "./SocialLinks";

function HoverPic({ name, src }: { name: string; src: string }) {
  return (
    <span className="hover-pic">
      {name}
      <span className="hover-pic__popup" aria-hidden="true">
        <img src={src} alt={name} />
      </span>
    </span>
  );
}

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "CSS",
  "HTML",
  "Design Systems",
  "Design Tokens",
  "Figma",
  "Storybook",
  "Chromatic",
  "GitHub Actions",
  "Visual Regression Testing",
  "Core Web Vitals",
  "CLI Design",
  "AWS Lambda",
  "AWS Bedrock",
  "Frontend Performance",
  "npm",
];

export function About() {
  const { ref, visible } = useIntersect<HTMLDivElement>();

  return (
    <section className="about" id="about">
      <div className="container">
        <div ref={ref}>
          <div className="section-header">
            <span
              className={`section-label fade-up${visible ? " visible" : ""}`}
            >
              About
            </span>
            <h2
              className={`section-title fade-up${visible ? " visible" : ""}`}
              style={{ transitionDelay: "80ms" }}
            >
              Engineering and design
              <br />
              aren't trade-offs
            </h2>
          </div>
          <div className="about-inner">
            <div
              className={`about-photo-col fade-up${visible ? " visible" : ""}`}
              style={{ transitionDelay: "120ms" }}
            >
              <img
                src="/about/Blake_Anderson_Headshot.png"
                alt="Blake Anderson"
                className="about-photo"
                loading="lazy"
              />
              <SocialLinks />
            </div>
            <div
              className={`about-content fade-up${visible ? " visible" : ""}`}
              style={{ transitionDelay: "220ms" }}
            >
              <div className="about-bio">
                <p>
                  Staff software engineer at The Washington Post working on Arc
                  XP — a publishing platform used by hundreds of media
                  organizations around the world. My work sits between platform
                  engineering and product experience: building React component
                  libraries, developer tooling, platform APIs, and frontend
                  systems that help teams ship digital products at scale.
                </p>
                <p>
                  I studied systems engineering and economics at UVA, crossed
                  into UX and design work early in my career at IBM, and
                  completed a UX design course through General Assembly. My
                  college capstone paper was on designing policy simulation
                  experiences for global food security — not a typical
                  engineering thesis. That mix shaped how I think: I care about
                  how tools feel to use, how systems are understood, and what it
                  means for software to be well-made rather than just
                  functional.
                </p>
                <p>
                  I now live in Richmond, VA with my wife{" "}
                  <HoverPic name="Rebecca" src="/about/Rebecca.jpg" />, my goofy dog{" "}
                  <HoverPic name="Freddie" src="/about/Freddie.jpeg" />, and my toothless cat{" "}
                  <HoverPic name="Penny" src="/about/Penny.jpeg" />. When I'm not
                  at work, you can find me running, taking art classes at my
                  local art museum, playing golf, or going for a hike!
                </p>
              </div>
              <div className="about-skills">
                {skills.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
