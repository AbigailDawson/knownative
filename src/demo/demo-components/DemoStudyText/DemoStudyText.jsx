import { useState, useEffect } from 'react'
import './DemoStudyText.css'
import DemoPopup from '../DemoPopup/DemoPopup'
import DemoWord from '../DemoWord/DemoWord'
import * as demoAPI from '../../../utilities/demo-api'
import * as wordsAPI from '../../../utilities/words-service'

export default function DemoStudyText({ text, textId, activeWord, setActiveWord, saveWord, savedWords, setSavedWords, showPopup, setShowPopup }) {

  const [tokenizedText, setTokenizedText] = useState([])
  const [popupPosition, setPopupPosition] = useState([0,0])

  useEffect(function() {
    async function getTokenizedText() {
      if (text) {
        const tokenizedText = await demoAPI.tokenizeText(text.content)
        setTokenizedText(tokenizedText)
      }
    }
    getTokenizedText()
  }, [text])

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

  const words = tokenizedText.map((word, idx) => {
    
    let pinyin = ''
    let meaning = ''

    //const savedWord = savedWords.find(savedWord => savedWord.traditional === word.traditional)
    
    const savedWord = null

    if (savedWord) {
      pinyin = savedWord.pinyin || pinyin
      meaning = savedWord.meaning || meaning
    } else {
      const wordInfo = wordsAPI.getWordInfo(word)
      pinyin = wordInfo.pinyin
      meaning = wordInfo.meaning
    }

    const isSpecialChar = wordsAPI.checkSpecialChar(word)
    
    return (
      <DemoWord 
        key={idx}
        onClick={(evt) => handleWordClick(word, evt)}
        word={word.text}
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
        <div className="study-text-block">
          {words}
        </div>
      </div>
      {showPopup && (
        <DemoPopup word={activeWord} popupPosition={popupPosition} saveWord={(word) => saveWord(word, textId)} onClose={handlePopup} />
      )}
    </>
  )
}
