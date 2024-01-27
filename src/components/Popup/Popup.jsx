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
  } else {
    pinyin = ''
    meaning = ''
  }

  function handleStarClick(word) {
    saveWord(word, textId)
  }

  return (
    <div className="Popup" style={{ 
      left: `${popupPosition[0] + 30}px`,
      top: `${popupPosition[1] - 40}px`,
      }}>
        <FontAwesomeIcon icon={lightStar} onClick={() => handleStarClick(word)} /> &nbsp;&nbsp;
        {pinyin} <br></br>
        {meaning}
        &nbsp;&nbsp; <button onClick={() => onClose()}>X</button>
    </div>
  )
}