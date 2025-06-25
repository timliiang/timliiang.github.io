import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './Components/About/About.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Projects from './Components/Projects/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <About />
    <Skills />
    <Projects />
  </StrictMode>,
)
