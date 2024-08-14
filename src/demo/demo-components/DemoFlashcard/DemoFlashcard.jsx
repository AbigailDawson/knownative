import './DemoFlashcard.css';

export default function DemoFlashcard({ 
  chinese, 
  pinyin, 
  english, 
  selectedFront, 
  showPinyin, 
  onCorrect, 
  onIncorrect,
  isFlipped,
  onToggle, // Added callback for toggling from parent
}) {

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
    </>
  );
}
