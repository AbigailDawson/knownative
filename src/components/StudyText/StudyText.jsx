import { useState, useEffect } from 'react'
import * as textsAPI from '../../utilities/texts-api'
import Popup from '../Popup/Popup'
import Word from '../Word/Word'

export default function StudyText({ tokenizedText, textId }) {

  const [activeWord, setActiveWord] = useState(null)
  const [savedWords, setSavedWords] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [popupPosition, setPopupPosition] = useState([0,0])

  useEffect(() => {
    async function getSavedWords() {
      const savedWords = await textsAPI.getSavedWords(textId)
      setSavedWords(savedWords)

    }
    getSavedWords()
  }, [savedWords])

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
        isSaved={checkSaved(word)}
      />
    )   
})

  return (
    <>
      <div className="studyText">
        <h1>Study Text</h1>
        {words}
      </div>
      {showPopup && (
        <Popup word={activeWord} popupPosition={popupPosition} saveWord={(word) => saveWord(word, textId)} onClose={handlePopup} />
      )}
    </>
  )
}
