import styles from "./Hero.module.scss";
import Dog from "@/components/Dog";
import { SOCIAL_LINKS } from "@/constants";
import { useGutterLines } from "@/hooks";

const Hero = () => {
  const gutterLines = useGutterLines();

  return (
    <main className={styles.hero}>
      <div className={styles.gutter} aria-hidden="true">
        {gutterLines.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>

      <section className={styles.content} aria-labelledby="hero-heading">
        <h1 id="hero-heading" className={styles.title}>
          Hi, I&apos;m Sanaz
          <span className={styles.role}>Frontend Engineer</span>
        </h1>
        <p className={styles.bio}>
          I turn ideas into fast, thoughtful, and delightful web experiences. I care about clean
          code, meaningful details, and building products people genuinely enjoy using.
        </p>
        <p className={styles.meta}>5+ years · React · Next.js · TypeScript</p>

        <nav className={styles.links} aria-label="Social links">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className={styles.link}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
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
