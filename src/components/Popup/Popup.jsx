import './Popup.css'

export default function Popup({ selectedText, popupPosition, saveWord, onClose}) {

  function handleClick(evt) {
    console.log('save button clicked')
    console.log('word to save: ', selectedText)
    saveWord(selectedText)
    onClose()
  }
  
  return (
    <div className="Popup" style={{ 
      left: `${popupPosition[0] + 30}px`,
      top: `${popupPosition[1] - 45}px`,
      }}>
        {selectedText} &nbsp; &nbsp; 
        <button onClick={handleClick}>Save</button>
    </div>
  )
}