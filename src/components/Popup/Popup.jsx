import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as lightStar } from '@fortawesome/free-regular-svg-icons'

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
      top: `${popupPosition[1] - 40}px`,
      }}>
        {pinyin} <br></br>
        {meaning} <br></br>
        <button onClick={() => handleSaveClick(word)}> Save </button> &nbsp; 
        <button onClick={() => onClose()}> Close </button>
    </div>
  )
}