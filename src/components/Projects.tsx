import useFetchData from '../services/fetchData'
import { createLinksList } from "../helpers/createLinksList"
import { BlockProps, LinkProps } from '../types'
import { createPillList } from "../helpers/createPillList"

interface ProjectProps {
  name: string,
  imageUrl: string,
  imageTitle: string | undefined,
  techList: string[],
  links: LinkProps[],
  workInProgress: boolean
}

const createProjectsList = (projects: any[]): ProjectProps[] => {
  const projectsData = projects.map(({ fields: { name, image, links, techList, workInProgress } }): ProjectProps => {
    const removeFromLinks = 'name'
    const { [removeFromLinks]: removedKey, ...rest } = links.fields // remove name field.
    const linksData = Object.values(rest)

    return {
      name,
      imageUrl: image.fields.file.url,
      imageTitle: image.fields.title,
      techList,
      links: linksData.map((link: any) => link.fields),
      workInProgress
    }
  })

  return projectsData
}

export default () => {
  const { loading, data: { block, list } } = useFetchData('projects')

  if (loading) return <div>Loading...</div>

  const { title }: BlockProps = block.fields

  const projectsList: ProjectProps[] = createProjectsList(Object.values(list.fields))

  return (
    <section className="py-20 align-element" id="projects">
      <h3 className="text-3xl font-bold capitalize border-b border-slate-300 pb-5 mb-16">{title}</h3>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsList.map(({ name, imageTitle, imageUrl, techList, links, workInProgress }, index) => (
          <li key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 flex flex-col justify-between">
            <div>
              <div className="border-b border-b-slate-100 px-3 py-5 rounded-t-lg flex flex-row justify-center relative">
                <img src={imageUrl} alt={imageTitle} className="h-48" />
                {workInProgress &&
                  <div className="absolute top-0 right-0 rounded-tr-lg rounded-bl-lg border-b border-b-slate-100 border-l border-l-slate-100 bg-slate-400 p-1" title={"Work in progress"}>
                    <span className="icon-[mdi--progress-wrench] w-5 h-5 block text-white" />
                  </div>
                }
              </div>
              <div className="px-10 pt-10 pb-5">
                <h2 className="text-xl font-bold mb-5 capitalize">{name}</h2>
                {createPillList(techList)}
              </div>
            </div>
            <div className="px-10 pb-10">{createLinksList(links)}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}