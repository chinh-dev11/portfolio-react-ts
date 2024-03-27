import '../styles/Navbar.css'
import useFetchData from '../services/fetchData'

const Navbar = () => {
  const { loading, data } = useFetchData('navbar')
  
  if (loading) return <div>Loading...</div>

  return (
    <nav>
      <a href="#section1"><h2>clê<span>Portfolio</span></h2></a>
      <ul>
        {data.sections.map((section: string, index: number) => (
          <li key={index}>
            <a href={`#section${index + 1}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar