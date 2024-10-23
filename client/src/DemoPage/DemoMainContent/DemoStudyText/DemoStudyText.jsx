import { useState, useEffect, useRef } from 'react';
import './DemoStudyText.css';
import DemoPopup from './components/DemoPopup/DemoPopup';
import DemoWord from './components/DemoWord/DemoWord';
import * as demoAPI from '../../../utilities/demo-api';
import * as wordsAPI from '../../../utilities/words-service';

export default function DemoStudyText({
  text,
  textId,
  activeWord,
  setActiveWord,
  saveWord,
  savedWords,
  showPopup,
  setShowPopup
}) {
  const [tokenizedText, setTokenizedText] = useState([]);
  const [popupPosition, setPopupPosition] = useState([0, 0]);
  const containerRef = useRef(null);
  useEffect(
    function () {
      async function getTokenizedText() {
        if (text) {
          const thisTokenizedText = await demoAPI.tokenizeText(text.content);
          setTokenizedText(thisTokenizedText);
        }
      }
      getTokenizedText();
    },
    [text]
  );

  function checkSaved(word) {
    return savedWords.some((savedWord) => savedWord.charGroup === word.traditional);
  }

  function handlePopup() {
    if (showPopup) {
      setActiveWord('');
      setShowPopup(false);
      // return
    }
  }

  // function handleWordClick(word, evt) {
  //   if (showPopup) {
  //     // Close the previous popup
  //     setShowPopup(false);
  //     setActiveWord('');
  //   }
  // Open the new popup
  //   setActiveWord(word);
  //   setPopupPosition([evt.pageX, evt.pageY]);
  //   setShowPopup(true);
  // }

  function handleWordClick(word, evt) {
    setActiveWord(word);

    // Note: using containerRect here so popup is positioned relative to the containerRef.
    // changed from pageX (whole document) to clientX (just the current viewport)
    const containerRect = containerRef.current.getBoundingClientRect();

    setPopupPosition([evt.clientX - containerRect.left, evt.clientY - containerRect.top - 150]);
    setShowPopup(true);
  }

  //this function first matches the word with the equivalent word saved in local storage and returns the meaning or pinyin saved in local storage
  function displaySavedProperty(word, propertyType) {
    const foundWord = savedWords.find((savedWord) => {
      return savedWord.charGroup === word.traditional;
    });
    return foundWord[propertyType];
  }

  const words = tokenizedText.map((word, idx) => {
    const isSaved = checkSaved(word);
    const wordInfo = wordsAPI.getWordInfo(word);
    // If the word is saved in local storage, display that meaning or pinyin. otherwise, just display the default pinyin and meaning
    const pinyin = isSaved ? displaySavedProperty(word, 'pinyin') : wordInfo.pinyin;
    const meaning = isSaved ? displaySavedProperty(word, 'meaning') : wordInfo.meaning;
    const isSpecialChar = wordsAPI.checkSpecialChar(word);

    return (
      <DemoWord
        key={idx}
        onClick={(evt) => handleWordClick(word, evt)}
        word={word}
        pinyin={pinyin}
        meaning={meaning}
        isSaved={checkSaved(word)}
        isSpecialChar={isSpecialChar}
        savedWords={savedWords}
      />
    );
  });

  return (
    <>
      <div className="StudyText" ref={containerRef}>
        <div className="study-text-block">{words}</div>
      </div>
      {showPopup && (
        <DemoPopup
          word={activeWord}
          popupPosition={popupPosition}
          saveWord={(word) => saveWord(word, textId)}
          onClose={handlePopup}
          checkSaved={checkSaved}
        />
      )}
    </>
  );
}
