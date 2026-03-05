import React from 'react'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import NavBar from './sections/NavBar.jsx'
import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero">
      </header>

      <NavBar />

      <main>
        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <p>© 2026 | Created by Amanda MacKinnon</p>
      </footer>
    </div>
  )
}

export default App