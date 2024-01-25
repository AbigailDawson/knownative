import { useState, useEffect } from 'react'
import * as textsAPI from '../../utilities/texts-api'
import Popup from '../Popup/Popup'
import Word from '../Word/Word'

export default function Text({ text, tokenizedText }) {

  const [activeWord, setActiveWord] = useState(null)

  const [showPopup, setShowPopup] = useState(false)
  const [popupPosition, setPopupPosition] = useState([0,0])

  function handlePopup() {
    if (showPopup) {
      setActiveWord('')
      setShowPopup(false)
      return
    }
  }

  function handleWordClick(word, evt) {
    setActiveWord(word)
    setPopupPosition([evt.pageX, evt.pageY])
    setShowPopup(true)
  }

  function getWordInfo(word) {
    let pinyin = ''
    let meaning = ''

    if (word.matches && word.matches[0]) {
      pinyin = word.matches[0].pinyinPretty
      meaning = word.matches[0].english
    } else {
      pinyin = ''
      meaning = ''
    }
    return { pinyin, meaning }
  }

  const words = tokenizedText.map((word, idx) => {
    const { pinyin, meaning } = getWordInfo(word)

    return (
      <Word 
        key={idx}
        onClick={(evt) => handleWordClick(word, evt)}
        text={word.text}
        traditional={word.traditional}
        simplified={word.simplified}
        pinyin={pinyin}
        meaning={meaning}
      />
    )   
})

  return (
    <>
      <div className="Text">
        <h1>{text.title}</h1>
        <h3>Source: {text.source}</h3>
        <p>{text.content}</p>
      </div>
      <div>
        <h1>Tokenized Text</h1>
        {words}
      </div>
      {showPopup && (
        <Popup word={activeWord} popupPosition={popupPosition} onClose={handlePopup} />
      )}
    </>
  )
}
