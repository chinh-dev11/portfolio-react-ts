import { ReactNode } from "react"
import useFetchData from '../services/fetchData'
import { createLinksList } from "../helpers/createLinksList"
import { BlockProps, ImageProps, LinkProps } from '../types'

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
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map(({ title, text, imageTitle, imageUrl, links }, index) => (
        <li key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 flex flex-col justify-between">
          <div>
            <img src={imageUrl} alt={imageTitle} className="rounded-t-lg" />
            <div className="p-10">
              <h2 className="text-xl font-bold capitalize mb-5">{title}</h2>
              <p className="mb-5">{text}</p>
            </div>
          </div>
          <div className="px-10 pb-10">{createLinksList(links)}</div>
        </li>
      ))}
    </ul>
  )
}

export default () => {
  const { loading, data: { block, list } } = useFetchData('projects')

  if (loading) return <div>Loading...</div>

  const { title }: BlockProps = block.fields
  const projectsData = Object.values(list.fields)

  return (
    <section className="py-20 align-element" id="section4">
      <h2 className="text-3xl font-bold capitalize border-b border-gray-300 pb-5 mb-16">{title}</h2>
      {createProjectsList(projectsData)}
    </section>
  )
}