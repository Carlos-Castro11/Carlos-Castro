import React from "react";
import styles from "./About.module.css";
import { ThemeContext } from "../../ThemeContext";

const About = () => {
  const { dark } = React.useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`${styles.about} ${dark && styles.aboutDark} container`}
    >
      <h1 className={styles.title}>Sobre mim</h1>
      <p className={styles.subtitle}>
        Aqui você encontrará mais informações sobre mim, o que faço e minhas
        habilidades atuais principalmente em termos de programação e
        tecnologias.
      </p>
      <div className={styles.aboutContent}>
        <div className={styles.nowMe}>
          <h3>Me conheça melhor!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel
            odit eveniet labore obcaecati placeat ea maiores corporis
            blanditiis. Cupiditate cum ex repellendus enim hic ab! Quo harum
            sint quisquam.
          </p>
        </div>
        <div className={styles.skills}>
          <h3>Habilidades</h3>
          <div className={styles.tech}>
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Node.js</p>
            <p>CSS</p>
            <p>SQLBasic</p>
            <p>API</p>
            <p>HTML</p>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
