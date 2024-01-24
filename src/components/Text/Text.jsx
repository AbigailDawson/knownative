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
      console.log('tokenizedText: ', tokenizedText)
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
        <p>你好世界！ <br></br>你想流利地閱讀中文嗎？ <br></br>這是一個提升閱讀理解能力的語言學習工具。<br></br> 從本文中選擇任何單字進行學習。</p>
      </div>
    </>
  )
}
