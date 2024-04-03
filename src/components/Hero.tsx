import useFetchData from '../services/fetchData'
import { createLinksList } from '../helpers/createLinksList'
import { LinkProps, ImageProps, BlockProps } from '../types'
import '../styles/Hero.css'

const Hero = () => {
  const { loading, data: { block, image, links } } = useFetchData('hero')

  if (loading) return <div>Loading...</div>

  const { title, subtitle, text }: BlockProps = block.fields
  const imageData: ImageProps = image.fields
  const linksData: LinkProps[] = Object.values(links.fields).map((link: any): LinkProps => link.fields)

  return (
    <section className="bg-sky-200">
      <div className="py-20 flex items-center gap-20 align-element" id="section1">
        <div>
          <h1 className="text-6xl font-bold mb-2">{title}</h1>
          <h2 className="text-3xl capitalize mb-2">{subtitle}</h2>
          <p className="text-lg capitalize mb-4">{text}</p>
          {createLinksList(linksData)}
        </div>
        <div className="hidden md:block">
          <img src={imageData.file.url} alt={imageData.title} />
        </div>
      </div>
    </section>
  )
}

export default Hero