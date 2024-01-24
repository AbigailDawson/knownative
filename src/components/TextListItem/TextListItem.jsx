import './TextListItem.css'

export default function TextListItem({ title, source, content }) {

  return (
    <div className="TextListItem">
      <h1>{title}</h1>
      <h3>Source: {source}</h3>
      <p>{content}</p>
      
    </div>
  )
}