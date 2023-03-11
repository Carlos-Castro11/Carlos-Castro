import React from "react";
import styles from "./Site.module.css";
import { ThemeContext } from "../../../ThemeContext";

const Site = ({ logo, desc, link }) => {
  const { dark } = React.useContext(ThemeContext);

  return (
    <div className={`${styles.site} ${dark && styles.siteDark}`}>
      <div className={styles.siteTitle}>
        <div className={styles.siteLogo}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={styles.siteDescription}>{desc}</div>
      <a className={styles.view} rel="noreferrer" target="_blank" href={link}>
        Visitar
      </a>
    </div>
  );
};

export default Site;
