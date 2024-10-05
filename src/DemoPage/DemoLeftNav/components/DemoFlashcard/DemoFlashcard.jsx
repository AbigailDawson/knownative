import './DemoFlashcard.css';

export default function DemoFlashcard({
  chinese,
  pinyin,
  english,
  selectedFront,
  showPinyin,
  isFlipped
}) {
  const englishTextStyle = {
    fontSize: '20px'
  };

  return (
    <>
      <div className="flashcard">
        <div className="flashcard-front">
          {selectedFront === 'chinese' ? (
            <div>
              {showPinyin && <p className="pinyin">{pinyin}</p>}
              <p className="zh flash-zh">{chinese}</p>
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
                {showPinyin && <p className="pinyin">{pinyin}</p>}
                <p className="zh flash-zh">{chinese}</p>
              </div>
            ) : (
              <div>
                <p style={englishTextStyle}>{english}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
