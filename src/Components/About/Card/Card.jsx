import React from "react";
import styles from "./Card.module.css";
import { ThemeContext } from "../../../ThemeContext";

const Card = ({ title, subtitle, icons, img, x }) => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <div className={`${styles.card} ${dark && styles.cardDark}`}>
      <div className={`${styles.cardTitle} ${x ? styles.xT : styles.xF}`}>
        {img}
        <h1>{title}</h1>
      </div>
      <p className={styles.cardSubtitle}>{subtitle}</p>
      <span className={styles.cardSpan}>Linguagens:</span> <br />
      <div className={styles.lang}>
        <img src={icons[0]} alt="" />
        <img src={icons[1]} alt="" />
        <img src={icons[2]} alt="" />
      </div>
      <span className={styles.cardSpan}>Tecnologias:</span> <br />
      <div className={styles.tech}>
        <img src={icons[3]} alt="" />
        <img src={icons[4]} alt="" />
      </div>
    </div>
  );
};

export default Card;
