import './Sentence.css'
import * as textsAPI from '../../utilities/texts-api'
import { useState } from 'react'
import Translation from '../../components/Translation/Translation'

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
      <span className="sentence">{sentence}</span>
        { showTranslation ? (
          <a className="hide-translation" onClick={hideTranslation}>Hide Translation</a>
        ) : (
          <a className="show-translation" onClick={() => handleTranslate(sentence)}>Show Translation</a>
        )
        }
    </div>
      {translation && showTranslation && <Translation translation={translation}/>}
    </>
  )
}