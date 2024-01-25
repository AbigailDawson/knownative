import './Popup.css'

export default function Popup({ selectedText, tokenizedText, popupPosition, saveItem, onClose}) {

  console.log('tokenizedText at Popup: ', tokenizedText)
  function handleClick(evt) {
    // saveItem(selectedText)
    onClose()
  }
  
  return (
    <div className="Popup" style={{ 
      left: `${popupPosition[0] + 10}px`,
      top: `${popupPosition[1] - 30}px`,
      }}>
        {tokenizedText[0].text}
        {tokenizedText[0].matches[0].pinyinPretty}
        {tokenizedText[0].matches[0].english}
        {/* <button onClick={handleClick}>Save</button> */}
    </div>
  )
}