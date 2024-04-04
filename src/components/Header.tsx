import useFetchData from '../services/fetchData'

export default () => {
  const { loading, data } = useFetchData('navbar')

  if (loading) return <div>Loading...</div>

  const { sections } = data.list.fields
  
  return (
    <header className="bg-sky-200">
      <div className="py-7 sm:flex flex-row flex-wrap items-center gap-16 align-element">
        <h1 title="Chinh Portfolio" className="flex flex-row items-center mb-2 sm:mb-0">
          <span className="font-logo text-sm font-bold bg-white text-black p-1 rounded-full mr-0.5">clê</span>
          <span className="text-lg font-bold">PORTFOLIO</span>
        </h1>
        <nav>
          <ul className="flex flex-row gap-4 capitalize text-lg">
            {sections.map((section: string) => (
              <li key={section}>
                <a href={`#${section}`} className="border-b border-b-sky-200 hover:border-black pb-1 duration-300">{section}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}