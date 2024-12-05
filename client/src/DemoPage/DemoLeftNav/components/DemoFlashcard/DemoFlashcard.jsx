import './DemoFlashcard.scss';

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
        <div className="flashcard__front">
          {selectedFront === 'chinese' ? (
            <div>
              {showPinyin && <p className="flashcard__front--pinyin">{pinyin}</p>}
              <p className="flashcard__front--zh zh">{chinese}</p>
            </div>
          ) : (
            <div>
              <p style={englishTextStyle}>{english}</p>
            </div>
          )}
        </div>

        {isFlipped && (
          <div className="flashcard__back">
            {selectedFront === 'english' ? (
              <div>
                {showPinyin && <p className="flashcard__back--pinyin">{pinyin}</p>}
                <p className="flashcard__back--zh zh">{chinese}</p>
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
