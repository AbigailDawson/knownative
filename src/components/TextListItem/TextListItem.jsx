import { Link } from 'react-router-dom'
import './TextListItem.css'
import { BsX } from "react-icons/bs";

export default function TextListItem({ title, source, content, id }) {

  const truncatedContent = content.slice(0, 50)

  return (
    <div className="TextListItem">
      <div className="left-side">

        <div className="delete-btn"><BsX /></div>
        <div className="item-content">
          <h3>{title}</h3>
          <p>{truncatedContent} ... </p>
        </div>
        
      </div>

      <Link className="read-btn" to={`/read/${id}`}>
        <button>Read</button>
      </Link>
    </div>
  )
}