import React from 'react'

function Contact() {
  return (
    <div>
      <h2 className="contact-me"> How to Get in Touch</h2>
    <div className="social-icons">
      <a
        href="https://linkedin.com/in/amanda-mackinnon-a2bb881b3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="devicon-linkedin-plain colored"></i>
      </a>

      <a href="mailto:your-email@gmail.com">
        <i className="devicon-google-plain colored"></i>
      </a>

      <a
        href="https://github.com/amandamackinnon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="devicon-github-original"></i>
      </a>

    </div>
    </div>
  );
}

export default Contact