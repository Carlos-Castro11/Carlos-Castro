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
      <div id="home" className={`${styles.hero} animeLeft`}>
        <div class="blob"></div>
        <div className={styles.heroContent}>
          <h1>Olá! eu sou {desktopLg ? null : <br />}Carlos Castro.</h1>
          <p>
            Uma pessoa apaixonada por desenvolvimento web,{" "}
            {desktopLg ? <br /> : null}especificamente com{" "}
            <strong>JavaScript</strong>.
          </p>
          <h2>
            <span style={{ color: "var(--main)" }}>
              {text}
              <Cursor cursorColor="var(--main)" />
            </span>
          </h2>
          <Button>Projetos</Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
