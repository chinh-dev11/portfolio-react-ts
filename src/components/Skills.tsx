import '../styles/Skills.css'
import { skills } from '../data'

const Skill = () => {
  return (
    <section className='skills' id="section2">
      <h2>{skills.title}</h2>
      <ul>
        {skills.items.map((skill, index) => (
          <li key={index}>
            <span>{skill.icon}</span>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skill