import '../styles/Projects.css'
import { projects } from '../data'
import parseLinks from '../helpers/links'

const Projects = () => {
  return (
    <section className='projects' id="section4">
      <h2>{projects.title}</h2>
      <ul>
        {projects.items.map((project, index) => (
          <li key={index}>
            <img src={project.image.src} alt={project.image.title} />
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="links">{parseLinks(project.links)}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects