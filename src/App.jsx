import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import LoadingAnimation from "./sections/Animations/LoadingWrapper";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? <LoadingAnimation /> : (
        <>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
