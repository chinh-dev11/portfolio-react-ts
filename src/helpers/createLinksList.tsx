import { ReactNode } from "react"
import { LinkProps } from '../types'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

export const createLinksList = (links: LinkProps[]): ReactNode => {
  return (
    <ul>
      {links.map((link: LinkProps, index: number) => (
        <li key={index}>
          <a href={link.url} target="_blank" title={link.title} rel="noreferrer">
            <span>
              {link.icon === 'github' && <FaGithubSquare />}
              {link.icon === 'linkedin' && <FaLinkedin />}
              {link.icon === 'www' && <TbWorldWww />}
              {link.icon === '' && link.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}