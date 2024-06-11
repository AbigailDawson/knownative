import './DemoSentence.css'
import * as demoAPI from '../../utilities/demo-api'
import { useState } from 'react'
import DemoTranslation from '../DemoTranslation/DemoTranslation'

export default function DemoSentence({sentence}) {
  const [translation, setTranslation] = useState('');
  const [showTranslation, setShowTranslation] = useState(false)

  async function handleTranslate(sentence) {
    if (translation === '') {
      const translatedSentence = await demoAPI.translateSentence(sentence)
      setTranslation(translatedSentence)
      setShowTranslation(true)
    } else {
      setShowTranslation(true)
    }
  }

  function hideTranslation() {
    setShowTranslation(false)
  }

  return (
    <>
    <div className="sentence-line">
      <span className="sentence zh">{sentence}</span>
        { showTranslation ? (
          <p className="hide-translation" onClick={hideTranslation}>Hide Translation</p>
        ) : (
          <p className="show-translation" onClick={() => handleTranslate(sentence)}>Show Translation</p>
        )
        }
    </div>
      {translation && showTranslation && <DemoTranslation translation={translation}/>}
    </>
  )
}