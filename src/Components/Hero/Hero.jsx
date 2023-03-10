import React from "react";
import styles from "./Hero.module.css";
import useMedia from "../../Hooks/useMedia";
import { ThemeContext } from "../../ThemeContext";

// TYPE
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../Button";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Hero = () => {
  const desktopLg = useMedia("(min-width: 850px)");
  const { dark } = React.useContext(ThemeContext);

  const [text] = useTypewriter({
    words: ["<JavaScript />", "<React />", "<Node />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <div
        id="home"
        className={`${dark ? styles.heroDark : styles.hero} animeLeft`}
      >
        <div className={styles.heroContent}>
          <h1>Olá! eu sou {desktopLg ? null : <br />}Carlos Castro.</h1>
          <p>
            Uma pessoa apaixonada por desenvolvimento web,{" "}
            {desktopLg ? <br /> : null}especificamente com{" "}
            <strong>JavaScript</strong>.
          </p>
          <h2>
            <span className={styles.type}>
              {text}
              <Cursor />
            </span>
          </h2>
          <a href="#projects">
            <Button>Projetos</Button>
          </a>
          <div className={styles.media}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/carloshcsousa"
              className={styles.linkedin}
            >
              <img src={linkedin} alt="" />
              Linkedin
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Carlos-Castro11"
              className={styles.github}
            >
              <span>
                <img src={github} alt="" />
                github
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
