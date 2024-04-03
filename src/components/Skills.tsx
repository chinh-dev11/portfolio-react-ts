import useFetchData from '../services/fetchData'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { BlockProps } from '../types'

interface SkillProps {
  title: string,
  text: string,
  icon: string
}

export default () => {
  const { loading, data: { block, list } } = useFetchData('skills')

  if (loading) return <div>Loading...</div>

  const blockData: BlockProps = block.fields
  const skillsData: SkillProps[] = Object.values(list.fields).map((skill: any) => skill.fields)

  return (
    <section className="py-20 align-element" id="section2">
      <h2 className="text-3xl font-bold capitalize border-b border-gray-300 pb-5 mb-16">{blockData.title}</h2>
      <ul className="flex flex-row flex-wrap gap-5">
        {skillsData.map(({ title, icon }, index) => {
          return (
            <li key={index}>
              <span title={title}>
                {icon === 'html' && <FaHtml5 className="w-20 h-20 text-[#de4b25]" />}
                {icon === 'js' && <FaJs className="w-20 h-20 text-[#e9d21b]" />}
                {icon === 'react' && <FaReact className="w-20 h-20 text-[#47d2f8]" />}
                {icon === '' && title}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}