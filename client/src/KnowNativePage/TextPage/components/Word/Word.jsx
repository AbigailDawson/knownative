import './Word.scss';

export default function Word({ tokens, handleWordClick }) {
  return (
    tokens.map((token, idx) => (
              <span
                key={idx}
                className={
                  "study__word"
                }
                // when the user clicks on a word, the token object will be sent to the handler function to display the popup.
                onClick={(e) => handleWordClick(token, idx, e)}
              >
                {token.text}
              </span>
            ))
  );
}
