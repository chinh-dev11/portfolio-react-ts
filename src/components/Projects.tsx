import { ReactNode } from "react"
import useFetchData from '../services/fetchData'
import { createLinksList } from "../helpers/createLinksList"
import { BlockProps, ImageProps, LinkProps } from '../types'
import { createPillList } from "../helpers/createPillList"

const createProjectsList = (projects: any[]): ReactNode => {
  const projectsData = projects.map(project => {
    const imageData: ImageProps = project.fields.image.fields
    const linksData: LinkProps[] = Object.values(project.fields.links.fields)
    const techList: string[] = project.fields.techList

    return {
      imageUrl: imageData.file.url,
      imageTitle: imageData.title,
      techList,
      links: linksData.map((link: any): LinkProps => link.fields)
    }
  })

  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map(({ imageTitle, imageUrl, techList, links }, index) => (
        <li key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 flex flex-col justify-between">
          <div>
            <div className="bg-slate-50 pb-1 flex flex-row justify-center"><img src={imageUrl} alt={imageTitle} className="rounded-t-lg" /></div>
            <div className="p-10">
              <h2 className="text-xl font-bold mb-5 capitalize">{imageTitle}</h2>
              {createPillList(techList)}
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
      <h2 className="text-3xl font-bold capitalize border-b border-slate-300 pb-5 mb-16">{title}</h2>
      {createProjectsList(projectsData)}
    </section>
  )
}