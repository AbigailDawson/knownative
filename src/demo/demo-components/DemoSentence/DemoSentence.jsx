import './DemoSentence.css'
import * as textsAPI from '../../utilities/texts-api'
import { useState } from 'react'
import Translation from '../../demo/demo-components/DemoTranslation/DemoTranslation'

export default function Sentence({sentence}) {
  const [translation, setTranslation] = useState('');
  const [showTranslation, setShowTranslation] = useState(false)

  async function handleTranslate(sentence) {
    if (translation === '') {
      const translatedSentence = await textsAPI.translateSentence(sentence)
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
      {translation && showTranslation && <Translation translation={translation}/>}
    </>
  )
}