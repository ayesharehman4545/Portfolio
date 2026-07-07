import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Services />

      <Projects />

      <Resume />

      <Testimonials />

      <Footer />
    </>
  );
}

export default App;