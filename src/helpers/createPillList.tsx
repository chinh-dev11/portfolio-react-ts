import { ReactNode } from "react"
import { capitalize } from './index'

export default (list: string[]): ReactNode => {
  return (
    <ul className="flex flex-row flex-wrap gap-2">
      {list.map((item, index) => (
        <li key={index} className="bg-slate-100 p-2 rounded">
          <span>{capitalize(item)}</span></li>
      ))}
    </ul>
  )
}