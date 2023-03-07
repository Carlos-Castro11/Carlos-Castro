import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={`${styles.about} container`}>
      <h1 className="title">Sobre mim</h1>
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
          <p>Js</p>
          <p>React</p>
          <p>Node</p>
        </div>
      </div>
    </section>
  );
};

export default About;
