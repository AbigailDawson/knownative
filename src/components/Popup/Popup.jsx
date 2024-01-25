import './Popup.css'

export default function Popup({ word, popupPosition, onClose}) {
  console.log(word)
  let pinyin = ''
  let meaning = ''

  if (word.matches && word.matches[0]) {
    pinyin = word.matches[0].pinyinPretty
    meaning = word.matches[0].english
  } else {
    pinyin = ''
    meaning = ''
  }

  console.log('pinyin: ', pinyin)
  
  return (
    <div className="Popup" style={{ 
      left: `${popupPosition[0] + 30}px`,
      top: `${popupPosition[1] - 40}px`,
      }}>
        {pinyin} <br></br>
        {meaning}
        <button onClick={() => onClose()}>X</button>
    </div>
  )
}