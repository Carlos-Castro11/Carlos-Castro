import React from "react";
import styles from "./Projects.module.css";
import { ThemeContext } from "../../ThemeContext";
import muflix from "../../assets/icons/muflix.svg";
import mf from "../../assets/icons/mf.svg";
import dogs from "../../assets/icons/dogs.svg";
import games from "../../assets/icons/games.svg";

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
          link="https://marquesefinelli.com.br/"
        />
        <Site
          desc="Dogs - Rede social para cachorros."
          logo={dogs}
          link="https://dogs-lemon.vercel.app/"
        />
        <Site
          desc="Garanta uma construção, com a melhor qualidade!"
          logo={mf}
          link="https://mf-wine.vercel.app/"
        />
        <Site
          desc="GAME-IN | E-commerce de games completo!"
          logo={games}
          link=""
          production={true}
        />
      </div>
    </section>
  );
};

export default Projects;
