import React from "react";
import "../App.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-text">
          <h3>About Me</h3>
          <p>
            I'm a tech enthusiast with a strong foundation in programming and a love for creating responsive web apps and smart systems.
          </p>
          <p>
            I enjoy learning new technologies and applying them to build meaningful projects. Here are some skills I have experience with:
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <h4>Programming</h4>
            <ul>
              <li>Python, C, C++</li>
              <li>Data Structures & Algorithms</li>
              <li>OOP, Pointers, Structures</li>
            </ul>
          </div>
          <div className="skill-card">
            <h4>Web & Tools</h4>
            <ul>
              <li>HTML, CSS, JS</li>
              <li>ReactJS, GitHub</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
