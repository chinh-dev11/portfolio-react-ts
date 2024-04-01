import useFetchData from '../services/fetchData'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { BlockProps } from '../types'
import '../styles/Skills.css'

interface SkillProps {
  title: string,
  text: string,
  icon: string
}

const Skill = () => {
  const { loading, data: { block, list } } = useFetchData('skills')

  if (loading) return <div>Loading...</div>

  const blockData: BlockProps = block.fields
  const skillsData: SkillProps[] = Object.values(list.fields).map((skill: any) => skill.fields)

  return (
    <section className='skills' id="section2">
      <h2>{blockData.title}</h2>
      <ul>
        {skillsData.map(({ title, text, icon }, index) => {
          return (
            <li key={index}>
              <span>
                {icon === 'html' && <FaHtml5 />}
                {icon === 'js' && <FaJs />}
                {icon === 'react' && <FaReact />}
                {icon === '' && title}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Skill