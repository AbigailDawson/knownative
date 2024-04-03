import './DemoFlashcard.css'
import { useState } from 'react'

export default function DemoFlashcard({ chinese, pinyin, english, selectedFront, showPinyin, onCorrect, onIncorrect }) {
  
  const [isFlipped, setIsFlipped] = useState(false)

  function handleFlip() {
    setIsFlipped(!isFlipped)
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
      
    </>
  )
}