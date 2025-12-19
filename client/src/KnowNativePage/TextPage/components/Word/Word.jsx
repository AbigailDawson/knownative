import './Word.scss';

export default function Word({ tokens, handleWordClick, isWordSaved }) {
  return (
    tokens.map((token, idx) => {
      const saved = isWordSaved(token._id, token.text);
      
      return (
        <span
          key={idx}
          className={`study__word${saved ? ' study__word--saved' : ''}`}
          onClick={(e) => handleWordClick(token, idx, e)}
        >
          {token.text}
        </span>
      );
    })
  );
}