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
    <section className='hero' id="section1">
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{text}</p>
        {createLinksList(linksData)}
      </div>
      <div>
        <img src={imageData.file.url} alt={imageData.title} />
      </div>
    </section>
  )
}

export default Hero