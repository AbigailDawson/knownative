import './DemoFlashcard.css';
import { useState } from 'react';

export default function DemoFlashcard({ 
  chinese, 
  pinyin, 
  english, 
  selectedFront, 
  showPinyin, 
  onCorrect, 
  onIncorrect, 
  showButtons 
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  function handleToggle() {
    setIsFlipped(!isFlipped);
    setButtonClicked(true);
  }

  const englishTextStyle = {
    fontSize: '24px',
  };

  return (
    <>
      <div className="flashcard">
        <div className="flashcard-front">
          {selectedFront === 'chinese' ? (
            <div>
              {showPinyin && <p className="pinyin">{pinyin}</p>}
              <p className="zh">{chinese}</p>
            </div>
          ) : (
            <div>
              <p style={englishTextStyle}>{english}</p>
            </div>
          )}
        </div>
        
        {isFlipped && (
          <div className="flashcard-back">
            {selectedFront === 'english' ? (
              <div>
                <hr />
                {showPinyin && <p className="pinyin">{pinyin}</p>}
                <p className="zh">{chinese}</p>
              </div>
            ) : (
              <div>
                <hr />
                <p style={englishTextStyle}>{english}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {!buttonClicked && (
        <button className="flip-button" onClick={handleToggle}>
          {isFlipped ? 'Show Front' : 'Flip Card'}
        </button>
      )}

      {showButtons && (
        <div className="flashcard-btns">
          <button className="correct-btn" onClick={onCorrect}>
            Correct!
          </button>
          <button className="incorrect-btn" onClick={onIncorrect}>
            Try Again
          </button>
        </div>
      )}
    </>
  );
}
