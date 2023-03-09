import React from "react";
import styles from "./Projects.module.css";
import { ThemeContext } from "../../ThemeContext";
import muflix from "../../assets/icons/muflix.svg";
import mf from "../../assets/icons/mf.svg";
import dogs from "../../assets/icons/dogs.svg";

// COMPONENTS
import Site from "./Site/Site";

const Projects = () => {
  const { dark } = React.useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={`${styles.projects} ${dark && styles.projectsDark}`}
    >
      <h1 className={styles.title}>Projetos</h1>
      <div className={`${styles.projectsContent} container`}>
        <Site
          desc="lorem lorem lorem lorem rlorem lorem lorem"
          logo={muflix}
          link="https://muflix-delta.vercel.app/"
        />
        <Site
          desc="lorem lorem lorem lorem rlorem lorem lorem"
          logo={dogs}
          link="https://dogs-lemon.vercel.app/"
        />
        <Site
          desc="lorem lorem lorem lorem rlorem lorem lorem"
          logo={mf}
          link="https://marques-finelli.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
