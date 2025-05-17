import { useEffect, useState } from "react";
import * as demoAPI from "../../utilities/demo-api"
import "./StudyTab.scss";

/**
 * StudyTab
 * Shows the current text, split into word objects using the demo tokenizer
 * – There aren't any click handlers yet
 */

export default function StudyTab({ text }) {
  const [tokens, setTokens] = useState([]);

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
          <span key={i} className="study__word">
            {w.text}
          </span>
        ))}
      </div>
    </section>
  );
}