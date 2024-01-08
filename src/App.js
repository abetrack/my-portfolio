import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
      <main className="text-gray-300 bg-gray-900 body-font">
        <Navbar/>
        <About/>
        <Skills/>
        <Experiences/>
        <Projects/>
        <Contact/>
      </main>
  );
}
