import './FlashcardForm.css'
import { useState } from 'react'
import TextField from '@mui/material/TextField';

export default function FlashcardForm({ selectedFront, setSelectedFront, showPinyin, setShowPinyin, handlePlay }) {

  return(
    <>
      <div> Front: 
        <label for="chinese">Chinese</label>
        <input 
          id="chinese"
          type="radio"
          value="chinese"
          checked={selectedFront === 'chinese'}
          onChange={() => setSelectedFront('chinese')}
        />
        <label for="english">English</label>
        <input 
          id="english"
          type="radio"
          value="english"
          checked={selectedFront === 'english'}
          onChange={() => setSelectedFront('english')}
        />
      </div>
      <div>
        <label htmlFor="pinyin">Show pinyin?</label>
        <input 
          id="pinyin"
          type="checkbox"
          checked={showPinyin}
          onChange={() => setShowPinyin(!showPinyin)} 
        />
      </div>
      <button onClick={handlePlay}>Play!</button>
    </>
  )
}