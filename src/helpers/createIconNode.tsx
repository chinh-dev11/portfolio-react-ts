import { ReactNode } from "react"
import { FaVuejs, FaReact, FaAngular, FaJs, FaHtml5, FaCss3, FaSass, FaLess, FaNpm, FaYarn, FaNodeJs, FaAws } from 'react-icons/fa'
import { SiTypescript, SiJest, SiCypress, SiGraphql, SiMysql, SiFirebase, SiTailwindcss, SiContentful } from 'react-icons/si'
import { IoIosGitBranch } from "react-icons/io"
import { capitalize } from '../helpers'
import { IconProps } from '../types'

const iconSize = 'w-16 h-16'

export default (skill: IconProps): ReactNode | undefined => {
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