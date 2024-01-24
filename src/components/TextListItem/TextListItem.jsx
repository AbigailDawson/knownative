import { Link } from 'react-router-dom'
import './TextListItem.css'

export default function TextListItem({ title, source, content, id }) {

  return (
    <div className="TextListItem">
      <h1>{title}</h1>
      <h3>Source: {source}</h3>
      <p>{content}</p>
      <Link to={`/read/${id}`}>Read</Link>
    </div>
  )
}