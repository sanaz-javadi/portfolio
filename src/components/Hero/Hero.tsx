import "./Hero.scss";
import Dog from "../Dog";
import { SOCIAL_LINKS, GUTTER_LINES } from "../../constants";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__gutter" aria-hidden="true">
        {GUTTER_LINES.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>

      <section className="hero__content" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="hero__title">
          Hi, I&apos;m Sanaz
          <span className="hero__role">Frontend Engineer</span>
        </h1>
        <p className="hero__bio">
          I craft web experiences that feel effortless to use and hold up at
          scale, clean code, sharp details, and a deep care for the craft.
        </p>
        <p className="hero__meta">5+ years · React · Next.js · TypeScript</p>

        <nav className="hero__links" aria-label="Social links">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="hero__link"
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto") ? undefined : "noopener noreferrer"
              }
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </nav>
      </section>

      <Dog />
    </main>
  );
};

export default Hero;
