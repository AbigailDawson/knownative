import { useState, useEffect, useRef } from 'react';
import './DemoPopup.scss';

export default function Popup({ word, popupPosition, saveWord, onClose, checkSaved }) {
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
    const popupMeaning = document.querySelector('.save-word-popup__meaning');
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
      className="save-word-popup"
      style={{
        left: `${popupPosition[0] + 105}px`,
        top: popupHeight === '11rem' ? `${popupPosition[1] - 100}px` : `${popupPosition[1] - 50}px`,
        height: popupHeight
      }}
      ref={popupRef}>
      <div className="save-word-popup__content">
        <p className="save-word-popup__pinyin">{pinyin}</p>
        <p className="save-word-popup__glyphs">{word.text}</p>
        <p className="save-word-popup__meaning">
          {meaning.length > 25 ? (
            <span>
              {meaning.substring(0, meaning.lastIndexOf(' ', 20))}
              <br />
              {meaning.substring(meaning.lastIndexOf(' ', 20) + 1)}
            </span>
          ) : (
            meaning
          )}
        </p>
      </div>
      {!isSaved ? (
        <button className="save-word-popup__save-button" onClick={handleSaveClick}>
          {' '}
          +{' '}
        </button>
      ) : (
        <button className="save-word-popup__save-button--saved" disabled="true">
          {' '}
          ✓{' '}
        </button>
      )}
      &nbsp;
      {/* <button className="save-button" onClick={handleSaveClick} disabled={isSaved}> + </button>&nbsp; */}
      <button className="save-word-popup__close-btn" onClick={onClose}>
        {' '}
        x{' '}
      </button>
      <div className="save-word-popup__arrow" />
    </div>
  );
}
