import React from "react";
import styles from "./Header.module.css";
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
        <svg
          fill="#fff"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z" />
        </svg>
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
            <a onClick={() => setMobileActive(false)} href="#home">
              {desktop ? null : <Home />}
              Início
            </a>
          </li>
          <li className={styles.navItem}>
            <a onClick={() => setMobileActive(false)} href="#about">
              {desktop ? null : <About />}
              Sobre
            </a>
          </li>
          <li className={styles.navItem}>
            <a onClick={() => setMobileActive(false)} href="#portfolio">
              {desktop ? null : <Code />}
              Projetos
            </a>
          </li>
          <li className={styles.navItem}>
            <a onClick={() => setMobileActive(false)} href="#contact">
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
