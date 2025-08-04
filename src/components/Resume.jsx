import React from 'react';

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">Download my latest resume below.</p>
        <div style={{ marginTop: '2rem' }}>
          <a
            href="/Jathin Resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
