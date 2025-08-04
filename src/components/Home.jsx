import React from 'react';
import jathinImg from '../assets/Jathin.jpg'; // Ensure this image exists

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-card">
        <div className="avatar">
          <img
            src={jathinImg}
            alt="Jathin"
            className="avatar-img"
          />
        </div>
        <div className="home-content">
          <h1 className="home-title">Hi, I'm Jathin Lakkineni</h1>
          <h2 className="home-subtitle">Aspiring Developer</h2>
          <p className="home-description">
            I’m a passionate CSE student with a focus on building functional and creative solutions.
          </p>
          <a className="home-btn" href="#projects">View Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
