import useFetchData from '../services/fetchData'
import { createLinksList } from '../helpers/createLinksList'
import { LinkProps, ImageProps, BlockProps } from '../types'

export default () => {
  const { loading, data: { block, image, links } } = useFetchData('hero')

  if (loading) return <div>Loading...</div>
  
  const { title, subtitle, text }: BlockProps = block.fields
  const imageData: ImageProps = image.fields
  const linksData: LinkProps[] = Object.values(links.fields).map((link: any): LinkProps => link.fields)

  return (
    <section className="bg-sky-200">
      <div className="pt-10 pb-20 flex items-center md:justify-evenly align-element" id="section1">
        <div>
          <h2 className="text-6xl font-bold mb-2">{title}</h2>
          <h3 className="text-3xl capitalize mb-2">{subtitle}</h3>
          <p className="text-lg capitalize mb-4">{text}</p>
          {createLinksList(linksData)}
        </div>
        <div className="hidden md:block">
          <img src={imageData.file.url} alt={imageData.title} className="h-auto max-w-56" />
        </div>
      </div>
    </section>
  )
}