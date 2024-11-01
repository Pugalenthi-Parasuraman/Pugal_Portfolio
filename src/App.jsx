import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Initialize AOS in a useEffect hook
  useEffect(() => {
    AOS.init({
      offset: 120, // Offset (in px) from the original trigger point
      delay: 200, // Delay (in ms) before animation starts
      duration: 600, // Duration (in ms) for animation
      easing: "ease-in-out", // CSS easing function
      once: false, // Set to false to repeat animation on scroll
      mirror: true, // Animate elements out as you scroll past them
      anchorPlacement: "top-bottom", // Defines which position of the element should trigger the animation
    });

    // Refresh AOS to detect changes on component mount
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
