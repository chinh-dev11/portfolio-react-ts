import { ReactNode } from "react"
import { FaVuejs, FaReact, FaAngular, FaJs, FaHtml5, FaCss3, FaSass, FaLess, FaNpm, FaYarn, FaNodeJs, FaAws } from 'react-icons/fa'
import { SiTypescript, SiJest, SiCypress, SiGraphql, SiMysql, SiFirebase, SiTailwindcss, SiContentful } from 'react-icons/si'
import { IoIosGitBranch } from "react-icons/io"
import useFetchData from '../services/fetchData'
import { BlockProps } from '../types'
import { capitalize } from '../helpers'
import { createPillList } from '../helpers/createPillList'

interface SkillProps {
  title: string,
  text: string,
  icon: string
}

const iconSize = 'w-16 h-16'

const createIconNode = (skill: SkillProps): ReactNode | undefined => {
  const cssClasses = `${iconSize} text-${skill.icon}`
  const capTitle = capitalize(skill.title)

  const iconList: any = {
    vue: <FaVuejs className={cssClasses} title={capTitle} />,
    react: <FaReact className={cssClasses} title={capTitle} />,
    ng: <FaAngular className={cssClasses} title={capTitle} />,
    js: <FaJs className={cssClasses} title={capTitle} />,
    ts: <SiTypescript className={cssClasses} title={capTitle} />,
    html: <FaHtml5 className={cssClasses} title={capTitle} />,
    css: <FaCss3 className={cssClasses} title={capTitle} />,
    sass: <FaSass className={cssClasses} title={capTitle} />,
    less: <FaLess className={cssClasses} title={capTitle} />,
    tailwind: <SiTailwindcss className={cssClasses} title={capTitle} />,
    jest: <SiJest className={cssClasses} title={capTitle} />,
    cy: <SiCypress className={cssClasses} title={capTitle} />,
    npm: <FaNpm className={cssClasses} title={capTitle} />,
    yarn: <FaYarn className={cssClasses} title={capTitle} />,
    nodejs: <FaNodeJs className={cssClasses} title={capTitle} />,
    gql: <SiGraphql className={cssClasses} title={capTitle} />,
    mysql: <SiMysql className={cssClasses} title={capTitle} />,
    firebase: <SiFirebase className={cssClasses} title={capTitle} />,
    aws: <FaAws className={cssClasses} title={capTitle} />,
    contentful: <SiContentful className={cssClasses} title={capTitle} />,
    git: <IoIosGitBranch className={cssClasses} title={capTitle} />
  }

  return iconList[skill.icon]
}

const createSkillsNodes = (skillsData: SkillProps[]): ReactNode => {
  const skillsIcons: ReactNode[] = []
  const skillsTitles: string[] = []

  skillsData.forEach(skill => {
    const skillIcon = createIconNode(skill)

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
      {skillsTitles.length && createPillList(skillsTitles)}
    </div>
  )
}

export default () => {
  const { loading, data: { block, list } } = useFetchData('skills')

  if (loading) return <span className="icon-[svg-spinners--pulse-rings-2] w-10 h-10 block" />

  const blockData: BlockProps = block.fields
  const skillsData: SkillProps[] = Object.values(list.fields).map((skill: any) => skill.fields)

  return (
    <section className="py-20 align-element" id="skills">
      <h3 className="text-3xl font-bold capitalize border-b border-slate-300 pb-5 mb-16">{blockData.title}</h3>
      {createSkillsNodes(skillsData)}
    </section>
  )
}