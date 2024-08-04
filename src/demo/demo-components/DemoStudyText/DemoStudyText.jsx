import { useState, useEffect, useRef } from 'react'
import './DemoStudyText.css'
import DemoPopup from '../DemoPopup/DemoPopup'
import DemoWord from '../DemoWord/DemoWord'
import * as demoAPI from '../../../utilities/demo-api'
import * as wordsAPI from '../../../utilities/words-service'

export default function DemoStudyText({ text, textId, activeWord, setActiveWord, saveWord, savedWords, setSavedWords, showPopup, setShowPopup }) {

  const [tokenizedText, setTokenizedText] = useState([])
  const [popupPosition, setPopupPosition] = useState([0,0])
  const containerRef = useRef(null);


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
    return savedWords.some((savedWord) => savedWord.charGroup === word.traditional)
  }

  function handlePopup() {
    if (showPopup) {
      setActiveWord('')
      setShowPopup(false)
      return
    }
  }

  function handleWordClick(word, evt) {
    if (showPopup) {
      // Close the previous popup
      setShowPopup(false);
      setActiveWord('');
    }
    // Open the new popup
    setActiveWord(word);
    
    // Note: using containerRect here so popup is positioned relative to the containerRef. 
    // changed from pageX (whole document) to clientX (just the current viewport)
    const containerRect = containerRef.current.getBoundingClientRect();
    
    setPopupPosition([
      evt.clientX - containerRect.left, 
      evt.clientY - containerRect.top - 40
    ]);
    setShowPopup(true);
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
      <div className="StudyText" ref={containerRef}>
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
