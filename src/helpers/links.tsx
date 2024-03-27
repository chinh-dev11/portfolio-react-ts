import { ReactNode } from "react"

interface Links {
  [index: string]: {
    url: string,
    title: string,
    icon: ReactNode
  }
}

// interface Links {
//   [index: string]: Link
// }

export default (links: Links): ReactNode => {
  return (
    <ul>
      {Object.values(links).map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" title={link.title} rel="noreferrer"><span>{link.icon}</span></a>
        </li>
      ))}
    </ul>
  )
}