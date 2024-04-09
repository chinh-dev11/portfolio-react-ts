import { ReactNode } from "react"
import useFetchData from '../services/fetchData'
import { BlockProps, IconProps } from '../types'
import createPillList from '../helpers/createPillList'
import Loading from './Loading'
import createIcon from '../helpers/createIconNode'

const createSkillsNodes = (skillsData: IconProps[], cbCreateIcon: Function, cbCreatePillList: Function): ReactNode => {
  const skillsIcons: ReactNode[] = []
  const skillsTitles: string[] = []

  skillsData.forEach(skill => {
    const skillIcon = cbCreateIcon(skill)

    if (!skillIcon) skillsTitles.push(skill.title)
    else skillsIcons.push(skillIcon)
  })

  return (
    <div>
      {skillsIcons.length && (
        <ul className="flex flex-row flex-wrap gap-4 mb-5">
          {skillsIcons.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
      {skillsTitles.length && cbCreatePillList(skillsTitles)}
    </div>
  )
}

export default () => {
  const { loading, data: { block, list } } = useFetchData('skills')

  if (loading) return <Loading minHeight />

  const blockData: BlockProps = block.fields
  const skillsData: IconProps[] = Object.values(list.fields).map((skill: any) => skill.fields)

  return (
    <section className="py-20 app-align-element" id="skills">
      <h3 className="text-3xl font-bold capitalize border-b border-slate-300 pb-5 mb-16">{blockData.title}</h3>
      {createSkillsNodes(skillsData, createIcon, createPillList)}
    </section>
  )
}