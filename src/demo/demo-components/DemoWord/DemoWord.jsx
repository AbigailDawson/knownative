import './DemoWord.css'

export default function DemoWord({ word, pinyin, meaning, isSaved, isSpecialChar, onClick }) {

  return (
    <div 
      className={`Word ${isSpecialChar ? 'specialChar' : ''}`}
    >
    <p 
    className={`zh ${isSaved ? 'saved' : ''}`}
    onClick={!isSpecialChar ? onClick : undefined}
    style={{ color: isSaved ? '#056a6d' : 'var(--drk-txt)'}}
    >
      { word }
    </p>
      <div className="annotation" style={{ visibility: isSaved ? 'visible' : 'hidden'}}>
        <p className="pinyin">{pinyin}</p>
        <p className="meaning">{meaning}</p>
      </div>
    </div>
  )
}