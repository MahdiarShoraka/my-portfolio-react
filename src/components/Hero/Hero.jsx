import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi! I'm Mahdiar Shoraka</h1>
        <p className={styles.description}>
          A Software Engineering student passionate about Game Development and
          Full-Stack Development.
        </p>
        <a className={styles.contactBtn} href="mailto:mahdiarshoraka@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/linkedinprofile.png")}
        alt="Hero image of me"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
