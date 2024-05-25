import React from "react";
import styles from "./Card.module.css";
import { ThemeContext } from "../../../ThemeContext";

const Card = ({ title, subtitle, languageIcons, technologieIcons, img, isFrontEndCard = false }) => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <div className={`${styles.card} ${dark && styles.cardDark}`}>
      <div className={`${styles.cardTitle} ${isFrontEndCard ? styles.frontEndCard : styles.backEndCard}`}>
        {img}
        <h1>{title}</h1>
      </div>
      <p className={styles.cardSubtitle}>{subtitle}</p>
      <span className={styles.cardSpan}>Linguagens:</span> <br />
      <div className={styles.lang}>
        {languageIcons.map((icon) => {
          return <>
            <img key={icon} src={icon} alt="" />
          </>
        })}
      </div>
      <span className={styles.cardSpan}>Tecnologias:</span> <br />
      <div className={styles.tech}>
      {technologieIcons.map((icon) => {
          return <>
            <img key={icon} src={icon} alt="" />
          </>
        })}
      </div>
    </div>
  );
};

export default Card;
