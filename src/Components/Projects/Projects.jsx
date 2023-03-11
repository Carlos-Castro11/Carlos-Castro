import React from "react";
import styles from "./Projects.module.css";
import { ThemeContext } from "../../ThemeContext";
import muflix from "../../assets/icons/muflix.svg";
import mf from "../../assets/icons/mf.svg";
import dogs from "../../assets/icons/dogs.svg";

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
          link="https://muflix-delta.vercel.app/"
        />
        <Site
          desc="Dogs - Rede social para cachorros."
          logo={dogs}
          link="https://dogs-lemon.vercel.app/"
        />
        <Site
          desc="Garanta uma construção, com a melhor qualidade!"
          logo={mf}
          link="https://marques-finelli.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
