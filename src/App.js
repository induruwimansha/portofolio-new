import React from 'react';
// ✅ CORRECT
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Certifications from "./components/Certification";





function App() {
  return (
    <div className="App">

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="certifications">
        <Certifications />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />

    </div>
  );
}

export default App;