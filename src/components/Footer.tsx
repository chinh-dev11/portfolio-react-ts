import useFetchData from '../services/fetchData'

export default () => {
  const { loading, data: { text } } = useFetchData('footer')

  if (loading) return <span className="icon-[svg-spinners--pulse-rings-2] w-10 h-10 block" />

  return (
    <footer className="px-10 py-5 flex flex-row justify-center">
      <span className="text-slate-300">&copy; {text}</span>
    </footer>
  )
}