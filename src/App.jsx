// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Resume from "./components/Resume";
import Education from "./components/Education";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
