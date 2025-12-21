import './Word.scss';

export default function Word({ tokens, handleWordClick, isWordSaved }) {
  return (
    tokens.map((token, idx) => {
      const saved = isWordSaved(token._id, token.text);
      
      return (
        <div key={idx} className="study-word">
          <span
            className={`study-word__text${saved ? ' study-word__text--saved' : ''}`}
            onClick={(e) => handleWordClick(token, idx, e)}
          >
            {token.text}
          </span>
          <div 
            className="study-word__annotation" 
            style={{ visibility: saved ? 'visible' : 'hidden' }}
          >
            <p className="study-word__pinyin">{token.pronunciation}</p>
            <p className="study-word__meaning">{token.definition}</p>
          </div>
        </div>
      );
    })
  );
}