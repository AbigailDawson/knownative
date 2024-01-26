import { Link } from 'react-router-dom'
import './TextListItem.css'

export default function TextListItem({ title, source, content, id }) {

  return (
    <div className="TextListItem">
      <h1>{title}</h1>
      <Link to={`/read/${id}`}>Read</Link>
    </div>
  )
}