import React from "react";
import styles from "./Hero.module.css";
import useMedia from "../../Hooks/useMedia";

// TYPE
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Button from "../Button";

const Hero = () => {
  const desktopLg = useMedia("(min-width: 850px)");

  const [text] = useTypewriter({
    words: ["<JavaScript />", "<React />", "<Node />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <div id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Olá, meu nome é {desktopLg ? null : <br />}Carlos Castro.</h1>
          <p>
            Uma pessoa apaixonada por desenvolvimento web,{" "}
            {desktopLg ? <br /> : null}especificamente com{" "}
            <strong>JavaScript</strong>.
          </p>
          <h2>
            <span style={{ color: "rgb(139, 0, 0)" }}>
              {text}
              <Cursor cursorColor="rgb(139, 0, 0)" />
            </span>
          </h2>
          <Button>Projetos</Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
