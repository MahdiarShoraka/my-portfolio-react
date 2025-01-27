import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                molestiae voluptas delectus eveniet est ab. Dolorem voluptatem
                modi nostrum accusamus. Quasi exercitationem animi maiores illo
                ipsa, fuga recusandae ut hic.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                molestiae voluptas delectus eveniet est ab. Dolorem voluptatem
                modi nostrum accusamus. Quasi exercitationem animi maiores illo
                ipsa, fuga recusandae ut hic.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Game Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                molestiae voluptas delectus eveniet est ab. Dolorem voluptatem
                modi nostrum accusamus. Quasi exercitationem animi maiores illo
                ipsa, fuga recusandae ut hic.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
