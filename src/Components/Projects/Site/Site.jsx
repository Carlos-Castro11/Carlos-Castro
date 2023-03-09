import React from "react";
import styles from "./Site.module.css";

const Site = ({ logo, desc, link }) => {
  return (
    <div className={styles.site}>
      <div className={styles.siteTitle}>
        <div className={styles.siteLogo}>
          <img src={logo} alt="" />
        </div>
      </div>
      <a className={styles.view} rel="noreferrer" target="_blank" href={link}>
        Visualizar
      </a>
      <div className={styles.siteDescription}>{desc}</div>
    </div>
  );
};

export default Site;
