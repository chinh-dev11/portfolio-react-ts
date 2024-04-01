import { ReactNode } from "react"
import useFetchData from '../services/fetchData'
import { createLinksList } from "../helpers/createLinksList"
import { BlockProps, ImageProps, LinkProps } from '../types'
import '../styles/Projects.css'

const createProjectsList = (projects: any[]): ReactNode => {
  const projectsData = projects.map(project => {
    const blockData: BlockProps = project.fields.block.fields
    const imageData: ImageProps = project.fields.image.fields
    const linksData: LinkProps[] = Object.values(project.fields.links.fields)

    return {
      title: blockData.title,
      text: blockData.text,
      imageTitle: imageData.title,
      imageUrl: imageData.file.url,
      links: linksData.map((link: any): LinkProps => link.fields)
    }
  })

  return (
    <ul>
      {projectsData.map(({ title, text, imageTitle, imageUrl, links }, index) => (
        <li key={index}>
          <img src={imageUrl} alt={imageTitle} />
          <h2>{title}</h2>
          <p>{text}</p>
          {createLinksList(links)}
        </li>
      ))}
    </ul>
  )
}

const Projects = () => {
  const { loading, data: { block, list } } = useFetchData('projects')

  if (loading) return <div>Loading...</div>

  const { title }: BlockProps = block.fields
  const projectsData = Object.values(list.fields)

  return (
    <section className='projects' id="section4">
      <h2>{title}</h2>
      {createProjectsList(projectsData)}
    </section>
  )
}

export default Projects