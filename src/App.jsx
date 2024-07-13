import React from "react";
import "./App.css";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import LoadingAnimation from "./sections/Animations/LoadingWrapper";

function App() {
  return (
    <>
      <LoadingAnimation />
      <>
        <Header />
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </>
    </>
  );
}

export default App;
