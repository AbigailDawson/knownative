import './Flashcard.css'
import { useState } from 'react'
import { GiCheckMark } from "react-icons/gi";
import { PiRepeatBold } from "react-icons/pi";

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
    <>
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        {isFlipped && (
          <div className="flashcard-back">
            {selectedFront === 'english' ? (
              <div>
                {showPinyin && <p className="pinyin">{pinyin}</p>}
                <p className="zh">{chinese}</p>
              </div>
            ) : (
              <div>
                <p>{english}</p>
              </div>
            )}
          </div>
        )}
        {!isFlipped && (
          <div className={`flashcard-front ${isFlipped ? 'hidden' : ''}`}>
            {selectedFront === 'chinese' ? (
              <div>
                {showPinyin && <p className="pinyin">{pinyin}</p>}
                <p className="zh">{chinese}</p>
              </div>
            ) : (
              <div>
                <p>{english}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flashcard-btns">
        <button className="correct-btn" onClick={handleCorrect}><GiCheckMark className="flashcard-icon" />Correct!</button>
        <button className="incorrect-btn"  onClick={handleIncorrect}><PiRepeatBold className="flashcard-icon" />Try again</button>
      </div>
    </>
  )
}