import React from "react";
import styles from "./Projects.module.css";
import { ThemeContext } from "../../ThemeContext";

const Projects = () => {
  const { dark } = React.useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={dark ? styles.projectsDark : styles.projects}
    >
      <h1 className={styles.title}>Projetos</h1>
    </section>
  );
};

export default Projects;
