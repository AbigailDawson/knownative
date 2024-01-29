import { useState, useEffect } from 'react'
import * as textsAPI from '../../utilities/texts-api'
import './StudyText.css'
import Popup from '../Popup/Popup'
import Word from '../Word/Word'

export default function StudyText({ text, tokenizedText, textId, activeWord, setActiveWord, saveWord, savedWords, setSavedWords, showPopup, setShowPopup }) {

  const [popupPosition, setPopupPosition] = useState([0,0])

  function checkSaved(word) {
    return savedWords.some((savedWord) => savedWord.traditional === word.traditional)
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

    const savedWord = savedWords.find(savedWord => savedWord.traditional === word.traditional)
    if (savedWord) {
      pinyin = savedWord.pinyin || pinyin
      meaning = savedWord.meaning || meaning
    }

    return { pinyin, meaning }
  }

  const words = tokenizedText.map((word, idx) => {
    const { pinyin, meaning } = getWordInfo(word)
    
    // const prefixPunctuation = ['‘', '“', '《', '『', '【', '（']
    // const suffixPunctuation = ['’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？']

    const specialChars = ['‘', '“', '《', '『', '【', '（', '’', '”', '》', '』', '】', '）', '、', '，', '…', '。', '：', '；', '！', '？', '「', '」', '.', '・']
    const isSpecialChar = specialChars.includes(word.text) || /\d/.test(word.text) || /[^\u4e00-\u9fa5]/.test(word.text)

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
        isSpecialChar={isSpecialChar}
        />
    )
  })

  return (
    <>
      <div className="StudyText">
        <h1>{text.title}</h1>
        <h3>Source: {text.source}</h3>
        <div className="study-text-block">
        {words}
        </div>
      </div>
      {showPopup && (
        <Popup word={activeWord} popupPosition={popupPosition} saveWord={(word) => saveWord(word, textId)} onClose={handlePopup} />
      )}
    </>
  )
}
