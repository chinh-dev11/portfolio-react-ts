import useFetchData from '../services/fetchData'
import Loading from './Loading'

export default () => {
  const { loading, data: { text } } = useFetchData('footer')

  if (loading) return <Loading />

  return (
    <footer className="px-10 py-5 flex flex-row justify-center">
      <span className="text-slate-300">&copy; {text}</span>
    </footer>
  )
}