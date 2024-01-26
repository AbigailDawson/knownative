export default function readText({ text }) {
  return (
    <div className="Text">
      <h1>{text.title}</h1>
      <h3>Source: {text.source}</h3>
      <p>{text.content}</p>
    </div>
  )
}