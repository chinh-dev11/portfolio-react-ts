import useFetchData from '../services/fetchData'
import '../styles/Navbar.css'

const Navbar = () => {
  const { loading, data } = useFetchData('navbar')

  if (loading) return <div>Loading...</div>
  
  const { sections } = data.list.fields

  return (
    <nav>
      <a href="#section1"><h2>clê<span>Portfolio</span></h2></a>
      <ul>
        {sections.map((section: string, index: number) => (
          <li key={index}>
            <a href={`#section${index + 1}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar