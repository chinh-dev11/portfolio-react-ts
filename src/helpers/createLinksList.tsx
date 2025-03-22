import { ReactNode } from "react"
import { LinkProps } from '../types'
import { FaGithubSquare, FaGitlab, FaLinkedin } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

export default (links: LinkProps[]): ReactNode => {
  return (
    <ul className="flex flex-row gap-2">
      {links.map((link: LinkProps, index: number) => (
        <li key={index}>
          <a href={link.url} target="_blank" title={link.title} rel="noreferrer">
            <span>
              {link.icon === 'github' && <FaGithubSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />}
              {link.icon === 'gitlab' && <FaGitlab className="w-8 h-8 text-slate-500 hover:text-black duration-300" />}
              {link.icon === 'linkedin' && <FaLinkedin className="w-8 h-8 text-slate-500 hover:text-black duration-300" />}
              {link.icon === 'www' && <TbWorldWww className="w-8 h-8 text-slate-500 hover:text-black duration-300" />}
              {link.icon === '' && link.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}