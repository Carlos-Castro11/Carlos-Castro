import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={`${styles.about} container`}>
      <h1 className="title">Sobre mim</h1>
      <p className={styles.subtitle}>
        Aqui você encontrará mais informações sobre mim, o que faço e minhas
        habilidades atuais principalmente em termos de programação e
        tecnologias.
      </p>
    </section>
  );
};

export default About;
