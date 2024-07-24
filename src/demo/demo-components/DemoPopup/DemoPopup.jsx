import { useState, useEffect } from 'react';
import './DemoPopup.css'

export default function Popup({ word, popupPosition, saveWord, textId, onClose}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.Popup') && isOpen) {
        onClose();
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

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

  function handleSaveClick(word) {
    saveWord(word)
  }

  return (
    <div className="Popup" style={{ 
      left: `${popupPosition[0] + 0}px`,
      top: `${popupPosition[1] - 75}px`,
      }}>
        <div className="popup-content">
          <p>{pinyin}</p>
          <p>{meaning}</p>
        </div>

        <button className="save-button" onClick={() => handleSaveClick(word)}> + </button> &nbsp; 
        <button className="close-btn" onClick={() => {
          onClose();
          setIsOpen(false);
        }}> x </button>
    </div>
  )
}





 // function handleSaveClick(word) {
  //   saveWord(word, textId)
  // }