import { useState, useEffect } from 'react'
import * as textsAPI from '../../utilities/texts-api'
// import Popup from '../Popup/Popup'
import Word from '../Word/Word'

export default function Text({ text, tokenizedText }) {

  const words = tokenizedText.map((word, idx) => {
    let pinyin = ''
    let meaning = ''

    if (word.matches && word.matches[0]) {
      pinyin = word.matches[0].pinyinPretty
      meaning = word.matches[0].english
    } else {
      pinyin = ''
      meaning = ''
    }
    return (
      <Word 
        key={idx}
        text={word.text}
        traditional={word.traditional}
        simplified={word.simplified}
        pinyin={pinyin}
        meaning={meaning}
      />
    )   
})

  // const [showPopup, setShowPopup] = useState(false) // sets whether to show popup or not
  // const [popupContent, setPopupContent] = useState('') // sets the popup content
  // const [popupPosition, setPopupPosition] = useState([0,0]) // sets the position where the user clicks (mouseup)

  
  // function handleMouseUp(evt) {

  // }

  // function handlePopup() {
  //   if (showPopup) {
  //     setPopupContent('')
  //     setShowPopup(false)
  //     return
  //   }
  // }

    // setSelectedText(selection)
    // setPopupContent(selection)
    // setShowPopup(true)
  // }

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
      {/* {showPopup && (
        <Popup selectedText={popupContent} tokenizedText={tokenizedText} popupPosition={popupPosition} saveItem={saveItem} onClose={handlePopup} />
      )} */}
    </>
  )
}
