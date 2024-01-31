import './ReadText.css'
import * as textsAPI from '../../utilities/texts-api'

export default function ReadText({ text }) {

  async function handleSimplifyClick() {
    const simplifiedText = await textsAPI.simplifyText(text.content)
    console.log(simplifiedText)
  }

  return (
    <div className="ReadText">

      <span>Read an easier version of this text --  <button onClick={handleSimplifyClick}> Click Me! </button></span>

      <h1>{text.title}</h1>
      <h3>Source: {text.source}</h3>
        <div className="read-text-block">
          <p>{text.content}</p>
        </div>
    </div>
  )
}