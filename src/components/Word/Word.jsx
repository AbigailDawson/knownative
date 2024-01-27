import './Word.css'

export default function Word({ text, pinyin, meaning, isSaved, isSpecialChar, onClick }) {

  return (
      <div 
        className={`Word ${isSpecialChar ? 'specialChar' : ''}`}
      >
       <p
       onClick={!isSpecialChar ? onClick : undefined}
       style={{ color: isSaved ? 'green' : 'black'}}
       >{ text }</p>
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