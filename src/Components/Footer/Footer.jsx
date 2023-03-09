import React from "react";
import styles from "./Footer.module.css";
import { ThemeContext } from "../../ThemeContext";

const Footer = () => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <footer className={`${styles.footer} ${dark && styles.footerDark}`}>
      <h1>FOOTER</h1>
    </footer>
  );
};

export default Footer;
