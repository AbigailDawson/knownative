import { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './DemoPopup.css'

export default function Popup({ word, popupPosition, saveWord, textId, onClose}) {
  const [isOpen, setIsOpen] = useState(false);
  const [popupHeight, setPopupHeight] = useState('15%'); 

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.Popup') && isOpen) {
        onClose();
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      setIsOpen(false); 
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

  useEffect(() => {
    const popupMeaning = document.querySelector('.popup-meaning');
    const html = popupMeaning.innerHTML;
    const lines = html.split('<br>').length; // count the number of lines by splitting on <br> elements
    if (lines > 1) {
      setPopupHeight('220px'); // update popup height to 220px if there are more than 1 line
    } else {
      setPopupHeight('190px'); // keep popup height to 190px if there is only 1 line
    }
  }, [meaning]);

  return (
      <div
        className="Popup"
        style={{
          left: `${popupPosition[0] + 105}px`,
          top: popupHeight === '11rem'? `${popupPosition[1] - 100}px` : `${popupPosition[1] - 50}px`,
          height: popupHeight,
          
        }}
      >
      <div className="popup-content">
        <p className="popup-pinyin">{pinyin}</p>
        <p className="popup-glyphs">{word.text}</p>
        <p className="popup-meaning">
          {meaning.length > 25 ? (
            <span>
              {meaning.substring(0, meaning.lastIndexOf(' ', 20))}<br />
              {meaning.substring(meaning.lastIndexOf(' ', 20) + 1)}
            </span>
          ) : (
            meaning
          )}
        </p>
      </div>
      <ArrowDropDownIcon className="play-arrow-icon" />
      <button className="save-button" onClick={() => handleSaveClick(word)}> + </button> &nbsp; 
      <button className="close-btn" onClick={() => {
        onClose();
        setIsOpen(false);
      }}> x </button>
    </div>
  )
}