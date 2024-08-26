import { useState, useEffect, useRef } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './DemoPopup.css'

export default function Popup({ word, popupPosition, saveWord, textId, onClose, checkSaved }) {
  const [popupHeight, setPopupHeight] = useState('15%');
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  useEffect(() => {
    const popupMeaning = document.querySelector('.popup-meaning');
    const html = popupMeaning.innerHTML;
    const lines = html.split('<br>').length; // count the number of lines by splitting on <br> elements

    setPopupHeight(lines > 1 ? '220px' : '190px'); // update popup height based on the number of lines
      }, [word]);

      let pinyin = '';
      let meaning = '';

      if (word.matches && word.matches[0]) {
        pinyin = word.matches[0].pinyinPretty;
        meaning = word.matches[0].english;
        meaning = meaning.includes('/') ? meaning.split('/')[0].trim() : meaning;
      }

      function handleSaveClick() {
        saveWord(word);
      }

  const isSaved = checkSaved(word);

  return (
      <div
        className="Popup"
        style={{
          left: `${popupPosition[0] + 105}px`,
          top: popupHeight === '11rem'? `${popupPosition[1] - 100}px` : `${popupPosition[1] - 50}px`,
          height: popupHeight,
        }}
        ref={popupRef}
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
      {!isSaved ? (<button className="save-button" onClick={handleSaveClick}> + </button>) : (<button className="save-button saved-button" disabled="true"> ✓ </button>)}&nbsp;
      {/* <button className="save-button" onClick={handleSaveClick} disabled={isSaved}> + </button>&nbsp; */}
      <button className="close-btn" onClick={onClose}> x </button>
      <div className="popup-arrow" />
    </div>
  );
}
