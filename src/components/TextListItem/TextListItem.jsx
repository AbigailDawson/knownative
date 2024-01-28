import { Link } from 'react-router-dom'
import './TextListItem.css'

export default function TextListItem({ title, source, content, id }) {

  const truncatedContent = content.slice(0, 50)

  return (
    <div className="TextListItem">
      <div className="item-content">
        <h3>{title}</h3>
        <p>{truncatedContent} ... </p>
      </div>
      <Link className="read-btn" to={`/read/${id}`}>
        <button>Read</button>
      </Link>
    </div>
  )
}