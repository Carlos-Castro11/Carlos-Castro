import React from "react";
import styles from "./Button.module.css";
import { ThemeContext } from "../ThemeContext";

const Button = ({ children }) => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <button className={`${styles.button} ${dark && styles.buttonDark}`}>
      {children}
    </button>
  );
};

export default Button;
