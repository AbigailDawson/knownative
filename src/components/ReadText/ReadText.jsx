import './ReadText.css'
import { useState } from 'react'
import * as textsAPI from '../../utilities/texts-api'

export default function ReadText({ text }) {

  const [simplifiedText, setSimplifiedText] = useState(null)

  async function handleSimplifyClick() {
    const data = await textsAPI.simplifyText(text.content)
    const simplifiedText = data.choices[0].message.content
    setSimplifiedText(simplifiedText)
  }

  return (
    <div className="ReadText">

      <h1>{text.title}</h1>
      <h3>Source: {text.source}</h3>

        { simplifiedText ? (
          ''
        ) : (
          <span>Read an easier version of this text --  
            <button onClick={handleSimplifyClick}> Click Me! </button>
          </span>
        )}

      { simplifiedText && (
        <div>
          <p className="simplified-text">{simplifiedText}</p>
          <p className="disclaimer">Disclaimer: This text has been generated using artificial intelligence. While the model strives to produce accurate and coherent content, it may occasionally contain inaccuracies, grammatical errors, or unintended meaning. The AI model does not guarantee perfection, and the user is encouraged to exercise their judgment when interpreting the output.</p>
        </div>
      )}

        <div className="read-text-block">
          <p>{text.content}</p>
        </div>
    </div>
  )
}