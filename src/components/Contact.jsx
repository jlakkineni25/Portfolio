import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">Feel free to connect with me:</p>
        <div className="contact-icons">
          <a href="https://github.com/jathinlakkineni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="30" height="30" fill="#f8fafc" viewBox="0 0 24 24"><path d="M12 .5C5.8.5.5 5.8.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7.7 2 .9.2-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.2 1.2a11.1 11.1 0 0 1 5.8 0c2.1-1.5 3.2-1.2 3.2-1.2.6 1.7.2 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.3-5.3 5.7.5.4.8 1.1.8 2.2v3.3c0 .3.2.8.8.6a10.5 10.5 0 0 0 7.9-10.9C23.5 5.8 18.2.5 12 .5Z"/></svg>
          </a>
          <a href="mailto:jlakkineni25@gmail.com" aria-label="Email">
            <svg width="30" height="30" fill="#f8fafc" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13l8-6.99V6H4zm0 12h16V8.3l-7.6 6.1a1 1 0 0 1-1.2 0L4 8.3V18z"/></svg>
          </a>
          <a href="https://linkedin.com/in/jathinlakkineni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="30" height="30" fill="#f8fafc" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4 8h2v12H4zM9 8h2v1.4h.1c.3-.6 1.1-1.4 2.3-1.4 2.5 0 3 1.6 3 3.7V20h-2v-7.1c0-1-.1-2.2-1.3-2.2s-1.5 1-1.5 2.2V20H9z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
