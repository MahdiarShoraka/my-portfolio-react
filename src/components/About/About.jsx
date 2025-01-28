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
              <h3>Software Engineering Student</h3>
              <p>
                I am a fourth-year software engineering student at York
                University. I have achieved several academic awards and
                scholarships. Some of the important courses that I took include:
                Data Structures and Algorithms, Applied Linear Algebra, Intro to
                Computer graphics, Intro to Machine Learning, Computer Networks,
                and E-commerce Systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Game Developer</h3>
              <p>
                In my free time, I have built a strong foundation in game
                development, including programming in C++ and creating
                blueprints and game prototypes in Unreal Engine 5. I am
                continually advancing my expertise in game development, as this
                field is one of my primary interests within software
                engineering.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I have epxeirence developing Full-Stack applications and
                websites. I am proficnet in both java and JavaScript, have
                developed applications using frameworks and libraries like
                Node.js, Express.js, React, MongDB, SQLite, etc.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
