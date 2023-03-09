import React from "react";
import "./App.css";
import { ThemeStorage } from "./ThemeContext";

// COMPONENTS
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <ThemeStorage>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </ThemeStorage>
    </>
  );
}

export default App;
