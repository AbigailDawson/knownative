import { useEffect, useState } from "react";
import * as demoAPI from "../../utilities/demo-api"
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
        const words = await demoAPI.tokenizeText(text.content);
        setTokens(
            words.map((w) => (typeof w === "string" ? { text: w } : w))
        );
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
              "study__word" + 
              (activeWord?.index === i ? " study__word--active" : "")
            }

            // when clicked pull pronunciation + meaning from word data and open popup
            onClick={(e) => {
              const { pinyin = "", meaning = "", charGroup } = getWordInfo(w);
              setActiveWord({
                index: i,
                chars: charGroup || w.text,
                pinyin,
                meaning,
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