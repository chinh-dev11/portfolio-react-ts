import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
// import Projects from './components/Projects'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div>
      <Header />
      <div>
        <Hero />
        <Skills />
        <About />
        {/* <Projects /> */}
      </div>
      <Footer />
    </div>
  )
}

export default App
