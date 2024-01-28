import './ReadText.css'

export default function ReadText({ text }) {
  return (
    <div className="ReadText">
      <h1>{text.title}</h1>
      <h3>Source: {text.source}</h3>
        <div className="read-text-block">
          <p>{text.content}</p>
        </div>
    </div>
  )
}