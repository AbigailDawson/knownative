import { useState, useEffect } from 'react'
import * as textsAPI from '../../utilities/texts-api'

export default function Text({text, selectedText, setSelectedText}) {

  function handleMouseUp(evt) {
    getSelected()
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
      const tokenizedText = await textsAPI.tokenizeText(selection)
      console.log('tokenizedText: ', tokenizedText)
    } catch (error) {
      console.log(error)
      console.error('Tokenization failed: ', error)
    }

    setSelectedText(selection)
  }

  if (!text) {
    console.log('no text found')
    return null
  }

  return (
    <>
      <div className="Text" onMouseUp={handleMouseUp}>
        <h1>{text.title}</h1>
        <h3>Source: {text.source}</h3>
        <p>{text.content}</p>
      </div>
    </>
  )
}
