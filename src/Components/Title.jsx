import React from "react";
import styles from "./Title.module.css";
import { ThemeContext } from "../ThemeContext";

const Title = ({ children }) => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <h1 className={`${styles.title} ${dark && styles.titleDark}`}>
      {children}
    </h1>
  );
};

export default Title;
