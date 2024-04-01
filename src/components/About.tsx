import useFetchData from '../services/fetchData'
import { BlockProps, ImageProps } from '../types'
import '../styles/About.css'

const About = () => {
  const { loading, data: { block, image } } = useFetchData('about')
  
  if (loading) return <div>Loading...</div>

  const { title, text }: BlockProps = block.fields
  const imageData: ImageProps = image.fields

  return (
    <section className='about' id="section3">
      <img src={imageData.file.url} alt={imageData.title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  )
}

export default About