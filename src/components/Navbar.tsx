import useFetchData from '../services/fetchData'
import '../styles/Navbar.css'

const Navbar = () => {
  const { loading, data } = useFetchData('navbar')

  if (loading) return <div>Loading...</div>

  const { sections } = data.list.fields

  return (
    <header>
      <a href="#section1" className="mb-3 block"><span className="text-lg font-bold bg-sky-900 text-white p-2 rounded-full">clê</span><span className="uppercase text-xl">portfolio</span></a>
      <nav>
        <ul className="flex flex-row gap-2 capitalize text-lg">
          {sections.map((section: string, index: number) => (
            <li key={index} className="">
              <a href={`#section${index + 1}`}>{section}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar