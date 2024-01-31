import './Flashcard.css'
import { useState } from 'react'

export default function Flashcard({ chinese, pinyin, english, selectedFront, showPinyin, onCorrect, onIncorrect }) {
  
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped)
  }

  function handleCorrect() {
    onCorrect()
    handleFlip()
  }

  function handleIncorrect() {
    onIncorrect()
    handleFlip()
  }

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`flashcard-front ${isFlipped ? 'hidden' : ''}`}>
        { selectedFront === 'chinese' ? (
          <div>
            {showPinyin && <p>{pinyin}</p>}
            <p>{chinese}</p>
          </div>
        ) : (
          <div>
            <p>{english}</p>
          </div>
        )}
      </div>
      <div className={`flashcard-back ${isFlipped ? '' : 'hidden'}`}>
        { selectedFront === 'english' ? (
           <div>
            {showPinyin && <p>{pinyin}</p>}
            <p>{chinese}</p>
          </div>
          
        ) : (
          <div>
            <p>{english}</p>
          </div>
        )}
        <div>
          <button onClick={handleCorrect}>Correct!</button>
          <button onClick={handleIncorrect}>Try again!</button>
        </div>
      </div>
    </div>
  )
}