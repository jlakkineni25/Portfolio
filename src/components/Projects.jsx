import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Personal Finance Tracker</h3>
          <p>Console-based tool using C and custom data structures to track expenses.</p>
        </div>
        <div className="project-card">
          <h3>Traffic Light Controller using ICs</h3>
          <p>Simulated using logic gates, timers, and circuits.</p>
        </div>
        <div className="project-card">
          <h3>Thermostat</h3>
          <p>Fire/temperature alert system using sensors and Arduino. Programmed in C.</p>
        </div>
        <div className="project-card">
          <h3>QR Code Generator</h3>
          <p>Python app using qrcode library to generate images from URLs or text input.</p>
        </div>
        <div className="project-card">
          <h3>Attendance Calculator</h3>
          <p>Web tool using JS to compute attendance metrics and permissible bunks.</p>
        </div>
        <div className="project-card">
          <h3>Fitness Website</h3>
          <p>Responsive front-end using HTML, CSS, JS for fitness tips and routines.</p>
        </div>
        <div className="project-card">
          <h3>Emergency Dispatch System</h3>
          <p>Graph-based Python system to route emergency units optimally.</p>
        </div>
        <div className="project-card">
          <h3>DSA Visualizer</h3>
          <p>Animations of sorting, tree, and graph algorithms. Stack: HTML/CSS/JS.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
