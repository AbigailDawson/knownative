import { useState, useEffect } from 'react'
import * as textsAPI from '../../utilities/texts-api'
import Popup from '../Popup/Popup'

export default function Text({text, selectedText, setSelectedText, saveItem}) {

  const [tokenizedText, setTokenizedText] = useState([])

  const [showPopup, setShowPopup] = useState(false) // sets whether to show popup or not
  const [popupContent, setPopupContent] = useState('') // sets the popup content
  const [popupPosition, setPopupPosition] = useState([0,0]) // sets the position where the user clicks (mouseup)

  useEffect(() => { // monitors the selectedText variable (this code will fire whenever selectedText changes)
    if (selectedText) { 
      setPopupContent(selectedText)
      setShowPopup(true)
    } else {
      handlePopup()
    }
  }, [selectedText])

  function handleMouseUp(evt) {
    getSelected()
    handlePopup()
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
      return
    }

    try {
      const tokenizedText = await textsAPI.tokenizeText(selection)
      setTokenizedText(tokenizedText)
    } catch (error) {
      console.log(error)
      console.error('Tokenization failed: ', error)
    }

    setSelectedText(selection)
    setPopupContent(selection)
    setShowPopup(true)
  }

  return (
    <>
      <div className="Text" onMouseUp={handleMouseUp}>
        <h1>{text.title}</h1>
        <h3>Source: {text.source}</h3>
        <p>{text.content}</p>
      </div>
      {showPopup && (
        <Popup selectedText={popupContent} tokenizedText={tokenizedText} popupPosition={popupPosition} saveItem={saveItem} onClose={handlePopup} />
      )}
    </>
  )
}
