import '../styles/Hero.css'
import { hero } from '../data'
import parseLinks from '../helpers/links'

const Hero = () => {
  return (
    <section className='hero' id="section1">
      <div>
        <h1>{hero.title}</h1>
        <h2>{hero.subtitle}</h2>
        <p>{hero.text}</p>
        <div className="links">{parseLinks(hero.links)}</div>
      </div>
      <div>
        <img src={hero.image.src} alt={hero.image.title} />
      </div>
    </section>
  )
}

export default Hero