import { useState, useEffect } from 'react'
import * as textAPI from '../../utilities/text-api'

export default function Text({selectedText, setSelectedText}) {

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
      const tokenizedText = await textAPI.tokenizeText(selection)
      console.log('tokenizedText in Text.jsx: ', tokenizedText)

    } catch (error) {
      console.log(error)
      console.error('Tokenization failed: ', error)
    }

    setSelectedText(selection)
  }

  return (
    <>
      <div className="Text" onMouseUp={handleMouseUp}>
        <h1>Text</h1>
        <p>我是中国人。</p>
      </div>
    </>
  )
}
