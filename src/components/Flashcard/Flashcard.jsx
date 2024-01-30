import { useState } from 'react'

export default function Flashcard({ chinese, pinyin, meaning, isChineseFront, showPinyin, onCorrect, onIncorrect }) {
  
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
        { isChineseFront ? chinese : meaning}
      </div>
      <div className={`flashcard-back ${isFlipped ? 'hidden' : ''}`}>
        { isChineseFront ? meaning : chinese}
        <div>
          <button onClick={handleCorrect}>Correct</button>
          <button onClick={handleIncorrect}>Try again!</button>
        </div>
      </div>
    </div>
  )
}