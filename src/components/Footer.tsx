import useFetchData from '../services/fetchData'

export default () => {
  const { loading, data: { text } } = useFetchData('footer')

  if (loading) return <div>Loading...</div>

  return (
    <footer className="px-10 py-5 flex flex-row justify-center">
      <span className="text-slate-300">&copy; {text}</span>
    </footer>
  )
}