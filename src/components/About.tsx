import useFetchData from '../services/fetchData'
import { BlockProps, ImageProps } from '../types'
import '../styles/About.css'

const About = () => {
  const { loading, data: { block, image } } = useFetchData('about')

  if (loading) return <div>Loading...</div>

  const { title, text }: BlockProps = block.fields
  const imageData: ImageProps = image.fields

  return (
    <section className="bg-white">
      <div className="py-20 align-element grid grid-cols-1 md:grid-cols-2 " id="section3">
        <img src={imageData.file.url} alt={imageData.title} className="pb-20" />
        <div>
          <h2 className="text-3xl font-bold capitalize border-b border-gray-300 pb-5 mb-16">{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  )
}

export default About