import '../styles/Navbar.css'
import { navbar } from '../data'

const Navbar = () => {
  return (
    <nav>
      <a href="#section1"><h2>clê<span>Portfolio</span></h2></a>
      <ul>
        {Object.entries(navbar.sections).map(([sectionNum, text]) => (
          <li key={sectionNum}>
            <a href={`#section${sectionNum}`}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar