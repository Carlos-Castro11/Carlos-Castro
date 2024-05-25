import React from "react";
import styles from "./Projects.module.css";
import { ThemeContext } from "../../ThemeContext";
import muflix from "../../assets/icons/muflix.svg";
import mf from "../../assets/icons/mf.svg";
import dogs from "../../assets/icons/dogs.svg";
import timer from "../../assets/icons/timer.svg";

// COMPONENTS
import Site from "./Site/Site";
import Title from "../Title";

const Projects = () => {
  const { dark } = React.useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={`${styles.projects} ${dark && styles.projectsDark}`}
    >
      <Title>Projetos</Title>
      <div className={`${styles.projectsContent} container`}>
        <Site
          desc="A melhor plataforma de streaming atualmente."
          logo={muflix}
          link="https://muflix-2-0.vercel.app/"
        />
        <Site
          desc="Dogs - Rede social para cachorros."
          logo={dogs}
          link="https://dogs-lemon.vercel.app/"
        />
        <Site
          desc="Garanta uma construção, com a melhor qualidade!"
          logo={mf}
          link="https://marquesefinelli.com.br/"
        />
        <Site
          desc="IGNITE TIMER | Timer para controle de tempo e produtividade!"
          logo={timer}
          link="https://ignite-timer-indol.vercel.app/"
          production={true}
        />
      </div>
    </section>
  );
};

export default Projects;
