import React from "react";
import styles from "./Header.module.css";
import useMedia from "../../Hooks/useMedia";
import { ThemeContext } from "../../ThemeContext";

// COMPONENTS
import { ReactComponent as Home } from "../../assets/icons/house.svg";
import { ReactComponent as About } from "../../assets/icons/about.svg";
import { ReactComponent as Contact } from "../../assets/icons/contact.svg";
import { ReactComponent as Code } from "../../assets/icons/code.svg";

const Header = () => {
  const desktop = useMedia("(min-width: 600px)");
  const [mobileActive, setMobileActive] = React.useState(false);
  const { dark, setDark } = React.useContext(ThemeContext);

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
    <header className={`${styles.header} ${dark && styles.headerDark}`}>
      <div className={`${styles.profile} ${dark && styles.profileDark}`}>
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
      <div className={`${styles.nav} ${dark && styles.navDark}`}>
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
          } ${dark && styles.navListDark}`}
        >
          <li className={styles.navItem}>
            <a onClick={() => setMobileActive(false)} href="#home">
              {desktop ? null : <Home className={styles.iconNav} />}
              Início
            </a>
          </li>
          <li className={styles.navItem}>
            <a onClick={() => setMobileActive(false)} href="#about">
              {desktop ? null : <About className={styles.iconNav} />}
              Sobre
            </a>
          </li>
          <li className={styles.navItem}>
            <a onClick={() => setMobileActive(false)} href="#projects">
              {desktop ? null : <Code className={styles.iconNav} />}
              Projetos
            </a>
          </li>
          <li className={styles.navItem}>
            <a onClick={() => setMobileActive(false)} href="#contact">
              {desktop ? null : <Contact className={styles.iconNav} />}
              Contato
            </a>
          </li>
          <li className={styles.btnTheme} onClick={() => setDark(!dark)}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>dark-mode-solid</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Icons">
                  <g>
                    <rect width="48" height="48" fill="none" />
                    <g>
                      <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z" />
                      <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            {desktop ? null : <span>Theme</span>}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
