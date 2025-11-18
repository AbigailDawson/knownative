import { useEffect, useState } from "react";
import { getTextTokens } from "../../utilities/texts-api.js";
import "./StudyTab.scss";
import WordPopup from "./components/WordPopup/WordPopup";
import Spinner from "../../ui-components/Spinner/spinner.jsx";

export default function StudyTab({ text }) {
  const [tokens, setTokens] = useState([]);
  const [activeWord, setActiveWord] = useState(null);
  const [detectedLanguage, setDetectedLanguage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(true);
      try {
        const { tokens, detectedLanguage } = await getTextTokens(text._id);
        setDetectedLanguage(detectedLanguage);
        setTokens(
          tokens.map((token) => ( { text: token.word, ...token } ))
        );
        setIsLoading(false);
      } catch (err) {
        console.error("Tokenization failed:", err);
        setTokens([{ text: text.content }]); // fallback to displaying the full text.
        setIsLoading(false);
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
        {isLoading ? 
            <Spinner />
          :
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
        }
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