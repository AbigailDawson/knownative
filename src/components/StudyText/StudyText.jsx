import { useState, useEffect } from 'react'
import * as textsAPI from '../../utilities/texts-api'
import './StudyText.css'
import Popup from '../Popup/Popup'
import Word from '../Word/Word'

export default function StudyText({ tokenizedText, textId, savedWords }) {

  const [activeWord, setActiveWord] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [popupPosition, setPopupPosition] = useState([0,0])

  function checkSaved(word) {
    return savedWords.some((savedWord) => savedWord.traditional === word.traditional);
  }

  async function saveWord(word, textId) {
    await textsAPI.saveWord(word, textId)
    handlePopup()
  }

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
      meaning = meaning.includes('/') ? meaning.split('/')[0].trim() : meaning

    } else {
      pinyin = ''
      meaning = ''
    }
    return { pinyin, meaning }
  }

  const words = tokenizedText.map((word, idx) => {
    const { pinyin, meaning } = getWordInfo(word)
    
    // const prefixPunctuation = ['‘', '“', '《', '『', '【', '（']
    // const suffixPunctuation = ['’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？']

    const specialChars = ['‘', '“', '《', '『', '【', '（', '’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？', '「', '」', '.', '・', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

    return (
      <Word 
        key={idx}
        onClick={(evt) => handleWordClick(word, evt)}
        text={word.text}
        traditional={word.traditional}
        simplified={word.simplified}
        pinyin={pinyin}
        meaning={meaning}
        isSaved={checkSaved(word)}
        isSpecialChar={specialChars.includes(word.text)}
      />
    )
  })

  return (
    <>
      <div className="studyText">
        <h1>Study Text</h1>
        <div className="text-block">
        {words}
        </div>
      </div>
      {showPopup && (
        <Popup word={activeWord} popupPosition={popupPosition} saveWord={(word) => saveWord(word, textId)} onClose={handlePopup} />
      )}
    </>
  )
}
