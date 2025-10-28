import { useEffect, useState } from "react";
import { tokenizeText } from "../../utilities/tokenizer"
import "./StudyTab.scss";
import WordPopup from "./components/WordPopup/WordPopup";

export default function StudyTab({ text }) {
  const [tokens, setTokens] = useState([]);
  const [activeWord, setActiveWord] = useState(null);
  const [detectedLanguage, setDetectedLanguage] = useState(null);

  function handleWordClick(token, index, e) {
    const { pronunciation = "", definition = "" } = token;
    setActiveWord({
      index: index,
      chars: token.text,
      pinyin: pronunciation,
      meaning: definition,
      textId: text._id,
      rect: e.target.getBoundingClientRect(), // store click position for popup placement
    });
  }
  
  useEffect(() => {
    async function fetchTokens() {
      if (!text?.content) return;
      try {
        const { textDetails } = await tokenizeText(text.content);
        const tokenizedText = textDetails.tokenizedText;
        setDetectedLanguage(textDetails.detectedLanguage);
        setTokens(
            tokenizedText.map((token) => ( { text: token.word, ...token } ))
        );
        console.log('tokens:', tokenizedText);
      } catch (err) {
        console.error("tokenizeText failed:", err);
        setTokens([{ text: text.content }]); // fallback
      }
    }
    fetchTokens();
  }, [text]);

  return (
    <section className="study">
      <div className="study__language">
        <h5><strong>Language: </strong> { detectedLanguage || 'Loading...'}</h5> 
      </div>
      <div className="study__body">
        {tokens.map((token, idx) => (
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
        ))}
      </div>

      {/* show popup if a word was clicked */}
      {activeWord && (
        <WordPopup
          word={activeWord}
          anchorRect={activeWord.rect}
          onClose={() => setActiveWord(null)}
        />
      )}
    </section>
  );
}