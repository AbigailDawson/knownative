import { useState, useEffect } from 'react'
import Popup from '../../components/Popup/Popup'
import * as textAPI from '../../utilities/text-api'

export default function Text({selectedText, setSelectedText, addWord, saveWord}) {

  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState('')
  const [popupPosition, setPopupPosition] = useState([0,0])

  useEffect(() => { // monitors the selectedText variable (this code will fire whenever selectedText changes)
    if (selectedText) { 
      setPopupContent(selectedText)
      setShowPopup(true)
    } else {
      handlePopup()
    }
  }, [selectedText])

  function handleMouseUp(evt) {
    handlePopup()
    getSelected()
    setPopupPosition([evt.pageX, evt.pageY]) // saves position where user clicks
  }
  
  function handlePopup() {
    if (showPopup) {
      setPopupContent('')
      setShowPopup(false)
      return
    }
  }

  async function getSelected() {
    let selection=''

    if (window.getSelection) {
      selection = window.getSelection().toString()
    } else if (document.getSelection) {
      selection = document.getSelection().toString()
    } else {
      selection = document.selection && document.selection.createRange()
    }

    if (!selection) {
      console.log('no selection')
      return
    }

    console.log('SELECTION: ', selection)
    
    try {
      const tokenizedText = await textAPI.tokenizeText(selection)
      console.log('tokenizedText in Text.jsx: ', tokenizedText)

    } catch (error) {
      console.log(error)
      console.error('Tokenization failed: ', error)
    }

    setSelectedText(selection)
    setPopupContent(selection)
    addWord(selection)
    setShowPopup(true)
  }

  return (
    <>
      <div className="Text" onMouseUp={handleMouseUp} onMouseDown={handlePopup}>
        <h1>Text</h1>
        <p>我是中国人。</p>
      </div>
      {showPopup && (
        <Popup selectedText={popupContent} popupPosition={popupPosition} saveWord={saveWord} onClose={handlePopup} />
      )}
    </>
  )
}
