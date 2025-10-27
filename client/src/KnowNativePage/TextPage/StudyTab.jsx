import { useEffect, useState } from "react";
// import * as demoAPI from "../../utilities/demo-api"
import { tokenizeText } from "../../utilities/tokenizer"
import "./StudyTab.scss";

import WordPopup from "./components/WordPopup/WordPopup";
import { getWordInfo } from "../../utilities/words-service";

export default function StudyTab({ text }) {
  const [tokens, setTokens] = useState([]);
  const [activeWord, setActiveWord] = useState(null);


  // call demo API; replace with real API call later
  useEffect(() => {
    async function fetchTokens() {
      if (!text?.content) return;
      try {
        const words = await tokenizeText(text.content);
        console.log("Your words, sir: ", words);
        console.log("Your detected language, sir: ", words.textDetails.detectedLanguage);
        console.log("Your tokenizedText sir:", words.textDetails.tokenizedText);
        // setTokens(
        //     words.map((w) => (typeof w === "string" ? { text: w } : w))
        // );
      } catch (err) {
        console.error("tokenizeText failed:", err);
        setTokens([{ text: text.content }]); // fallback
      }
    }
    fetchTokens();
  }, [text]);

  return (
    <section className="study">
      <div className="study__body">
        {tokens.map((w, i) => (
          <span
            key={i}
            className={
              "study__word"
            }

            // when clicked pull pronunciation + meaning from word data and open popup
            onClick={(e) => {
              const { pinyin = "", meaning = "", charGroup } = getWordInfo(w);
              setActiveWord({
                index: i,
                chars: charGroup || w.text,
                pinyin,
                meaning,
                textId: text._id,
                rect: e.target.getBoundingClientRect(), // store click position for popup placement
              });
            }}
          >
            {w.text}
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