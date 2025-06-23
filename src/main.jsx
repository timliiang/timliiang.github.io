import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './About.jsx'
import Nav from './Nav.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <About />
    <Skills />
    <Projects />
  </StrictMode>,
)
