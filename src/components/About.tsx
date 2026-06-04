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
              A little bit about me
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
                  Hey, I'm Blake. I'm a staff software engineer at The Washington Post,
                  where I work on Arc XP, a publishing platform used by hundreds of
                  media organizations around the world. I spend most of my time
                  building React component libraries, developer tooling, and frontend
                  systems that help teams ship better digital products.
                </p>
                <p>
                  I came up through systems engineering and economics at UVA, got my
                  first taste of product thinking at IBM, and picked up formal UX
                  training through General Assembly along the way. My college capstone
                  was on designing policy simulation experiences for global food
                  security. Not exactly a typical engineering thesis. That mix of
                  technical and human-centered thinking has stuck with me: I care a
                  lot about how software feels to use, not just whether it works.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
