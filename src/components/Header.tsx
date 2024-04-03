import useFetchData from '../services/fetchData'
import '../styles/Navbar.css'

const Navbar = () => {
  const { loading, data } = useFetchData('navbar')

  if (loading) return <div>Loading...</div>

  const { sections } = data.list.fields

  return (
    <header className="bg-sky-200">
      <div className="py-7 sm:flex flex-row flex-wrap items-center gap-16 align-element">
        <a href="#section1" className="flex flex-row items-center mb-2 sm:mb-0">
          <span className="text-lg font-bold bg-white text-black p-2 rounded-full mr-1 font-serif ring-white ring-2 ring-offset-2 ring-offset-black">clê</span>
          <span className="capitalize text-3xl font-bold">portfolio</span>
        </a>
        <nav>
          <ul className="flex flex-row gap-4 capitalize text-lg">
            {sections.map((section: string, index: number) => (
              <li key={index} className="">
                <a href={`#section${index + 1}`} className="hover:border-b hover:border-black pb-1">{section}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar