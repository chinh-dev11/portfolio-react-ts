import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import './styles/App.css'

function App() {
  return (
    <>
      <div className="bg-sky-200 p-5">
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <About />
      <Projects />
    </>
  )
}

export default App
