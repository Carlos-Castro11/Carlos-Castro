import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/icons/code.svg";
import useMedia from "../../Hooks/useMedia";

// COMPONENTS
import { ReactComponent as Home } from "../../assets/icons/house.svg";
import { ReactComponent as About } from "../../assets/icons/about.svg";
import { ReactComponent as Contact } from "../../assets/icons/contact.svg";
import { ReactComponent as Code } from "../../assets/icons/code.svg";

const Header = () => {
  const desktop = useMedia("(min-width: 600px)");
  const [mobileActive, setMobileActive] = React.useState(false);

  React.useEffect(() => {
    function setDesktop() {
      if (desktop) {
        setMobileActive(false);
      }
    }
    setDesktop();
    window.addEventListener("resize", setDesktop);
    return () => window.removeEventListener("resize", setDesktop);
  }, [desktop]);

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <img src={logo} alt="" />
        <h4>Carlos Castro</h4>
      </div>
      <div className={styles.nav}>
        {desktop ? null : (
          <button
            onClick={() => setMobileActive(!mobileActive)}
            className={`${styles.buttonMobile} ${
              mobileActive && styles.buttonMobileActive
            }`}
          ></button>
        )}
        <ul
          className={`${desktop ? styles.navListDesktop : styles.navList} ${
            mobileActive && styles.navListActive
          }`}
        >
          <li className={styles.navItem}>
            <a href="#home">
              {desktop ? null : <Home />}
              Início
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#about">
              {desktop ? null : <About />}
              Sobre
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#portfolio">
              {desktop ? null : <Code />}
              Projetos
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact">
              {desktop ? null : <Contact />}
              Contato
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
