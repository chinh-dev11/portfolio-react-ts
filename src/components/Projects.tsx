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
    <ul className="flex flex-row flex-wrap gap-8">
      {projectsData.map(({ title, text, imageTitle, imageUrl, links }, index) => (
        <li key={index} className="bg-white rounded-lg">
          <img src={imageUrl} alt={imageTitle} className="rounded-t-lg" />
          <div className="p-10">
            <h2 className="text-xl font-bold capitalize mb-5">{title}</h2>
            <p className="mb-5">{text}</p>
            {createLinksList(links)}
          </div>
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
    <section className="px-10 py-20" id="section4">
      <h2 className="text-3xl font-bold capitalize border-b border-gray-300 pb-5 mb-16">{title}</h2>
      {createProjectsList(projectsData)}
    </section>
  )
}

export default Projects