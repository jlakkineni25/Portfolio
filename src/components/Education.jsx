import React from "react";
import "../App.css";

const Education = () => {
  return (
    <section id="education">
      <h3 className="section-title">Education</h3>
      <div className="education-container">
        <div className="education-card">
          <h4>Harvest Public School</h4>
          <p>10th Grade (SSC)</p>
          <p>2014 – 2021</p>
        </div>
        <div className="education-card">
          <h4>New Vision Junior College</h4>
          <p>Intermediate (+1 & +2)</p>
          <p>2021 - 2023</p>
        </div>
        <div className="education-card">
          <h4>Amrita Vishwa Vidyapeetham</h4>
          <p>B.Tech in Computer Science</p>
          <p>2023 - Present</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
