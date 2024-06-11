import './Word.css'

export default function Word({ word, pinyin, meaning, isSaved, isSpecialChar, onClick }) {

  return (
      <div 
        className={`Word ${isSpecialChar ? 'specialChar' : ''}`}
      >
       <p className="zh"
       onClick={!isSpecialChar ? onClick : undefined}
       style={{ color: isSaved ? 'var(--red)' : 'var(--drk-txt)'}}
       >{ word }</p>
        <div 
          className="annotation" 
          style={{ visibility: isSaved ? 'visible' : 'hidden'}}
        >
          <p>{ pinyin }</p>
          <p>{ meaning }</p>
          </div>
      </div>
    
  )
}