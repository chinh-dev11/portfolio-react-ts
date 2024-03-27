import '../styles/About.css'
import useFetchData from '../services/fetchData'

const About = () => {
  const { loading, data } = useFetchData('about')
  
  if (loading) return <div>Loading...</div>

  return (
    <section className='about' id="section3">
      <img src={data.image.fields.file.url} alt={data.image.fields.title} />
      <h2>{data.title}</h2>
      <p>{data.text}</p>
    </section>
  )
}

export default About