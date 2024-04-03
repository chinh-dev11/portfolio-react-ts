import { ReactNode } from "react"
import { FaVuejs, FaReact, FaAngular, FaJs, FaHtml5, FaCss3, FaSass, FaLess, FaNpm, FaYarn, FaNodeJs, FaAws } from 'react-icons/fa'
import { SiTypescript, SiJest, SiCypress, SiGraphql, SiMysql, SiFirebase } from 'react-icons/si'
import { IoIosGitBranch } from "react-icons/io"
import useFetchData from '../services/fetchData'
import { BlockProps } from '../types'

interface SkillProps {
  title: string,
  text: string,
  icon: string
}

const iconSize = 'w-16 h-16'

const createIconNode = (skill: SkillProps): ReactNode | undefined => {
  const cssClasses = `${iconSize} text-${skill.icon}`

  const iconList: any = {
    vue: <FaVuejs className={cssClasses} title={skill.title} />,
    react: <FaReact className={cssClasses} title={skill.title}/>,
    ng: <FaAngular className={cssClasses} title={skill.title}/>,
    js: <FaJs className={cssClasses} title={skill.title}/>,
    ts: <SiTypescript className={cssClasses} title={skill.title}/>,
    html: <FaHtml5 className={cssClasses} title={skill.title}/>,
    css: <FaCss3 className={cssClasses} title={skill.title}/>,
    sass: <FaSass className={cssClasses} title={skill.title}/>,
    less: <FaLess className={cssClasses} title={skill.title}/>,
    jest: <SiJest className={cssClasses} title={skill.title}/>,
    cy: <SiCypress className={cssClasses} title={skill.title}/>,
    npm: <FaNpm className={cssClasses} title={skill.title}/>,
    yarn: <FaYarn className={cssClasses} title={skill.title}/>,
    nodejs: <FaNodeJs className={cssClasses} title={skill.title}/>,
    gql: <SiGraphql className={cssClasses} title={skill.title}/>,
    mysql: <SiMysql className={cssClasses} title={skill.title}/>,
    firebase: <SiFirebase className={cssClasses} title={skill.title}/>,
    aws: <FaAws className={cssClasses} title={skill.title}/>,
    git: <IoIosGitBranch className={cssClasses} title={skill.title}/>
  }
  
  return iconList[skill.icon]
}

const createSkillsNodes = (skillsData: SkillProps[]): ReactNode => {
  const skillsIcons: ReactNode[] = []
  const skillsTitles: ReactNode[] = []

  skillsData.forEach(skill => {
    const skillIcon = createIconNode(skill)

    if (!skillIcon) skillsTitles.push(<span className="capitalize">{skill.title}</span>)
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
      {skillsTitles.length && (
        <ul className="flex flex-row flex-wrap gap-4">
          {skillsTitles.map((skill, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded">{skill}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default () => {
  const { loading, data: { block, list } } = useFetchData('skills')

  if (loading) return <div>Loading...</div>

  const blockData: BlockProps = block.fields
  const skillsData: SkillProps[] = Object.values(list.fields).map((skill: any) => skill.fields)

  return (
    <section className="py-20 align-element" id="section2">
      <h2 className="text-3xl font-bold capitalize border-b border-gray-300 pb-5 mb-16">{blockData.title}</h2>
      {createSkillsNodes(skillsData)}
    </section>
  )
}