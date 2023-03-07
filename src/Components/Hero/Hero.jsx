import React from "react";
import styles from "./Hero.module.css";
import useMedia from "../../Hooks/useMedia";

// TYPE
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../Button";

const Hero = () => {
  const desktop = useMedia("(min-width: 600px)");

  const [text] = useTypewriter({
    words: ["<JavaScript />", "<React />", "<Node />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Olá, meu nome é {desktop ? null : <br />}Carlos Castro.</h1>
        <h1>
          <span style={{ color: "rgb(139, 0, 0)" }}>{text}</span>
          <Cursor cursorColor="rgb(139, 0, 0)" />
        </h1>
        <p>
          Uma pessoa apaixonada por desenvolvimento web, especificamente com
          JavaScript.
        </p>
        <Button>Projetos</Button>
      </div>
    </div>
  );
};

export default Hero;
