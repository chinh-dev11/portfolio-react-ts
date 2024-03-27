import '../styles/About.css'
import { about } from '../data'

const About = () => {
  return (
    <section className='about' id="section3">
      <img src={about.image.src} alt={about.image.title} />
      <h2>{about.title}</h2>
      <p>{about.text}</p>
    </section>
  )
}

export default About