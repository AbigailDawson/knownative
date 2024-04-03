import './DemoPopup.css'

export default function Popup({ word, popupPosition, saveWord, textId, onClose}) {

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
    saveWord(word, textId)
  }

  return (
    <div className="Popup" style={{ 
      left: `${popupPosition[0] + 30}px`,
      top: `${popupPosition[1] - 50}px`,
      }}>
        <div className="popup-content">
          <p>{pinyin}</p>
          <p>{meaning}</p>
        </div>

        <button onClick={() => handleSaveClick(word)}> Save </button> &nbsp; 
        <button onClick={() => onClose()}> Close </button>
    </div>
  )
}