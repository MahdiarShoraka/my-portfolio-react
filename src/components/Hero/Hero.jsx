import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello! I'm Mahdiar Shoraka</h1>
        <p className={styles.description}>
          A software engineering student passionate about game development and
          full-stack development.
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
