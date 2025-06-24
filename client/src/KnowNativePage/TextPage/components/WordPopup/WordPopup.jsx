import { useEffect, useRef, useState } from "react";
import { saveWord } from "../../../../utilities/words-api";
import "./WordPopup.scss";

export default function WordPopup({ word, anchorRect, onClose }) {
  const ref = useRef(null);
  const [saved, setSaved] = useState(false);

  // close popup if clicked outside of it
  useEffect(() => {
    const handle = (e) => !ref.current?.contains(e.target) && onClose();
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);

  // position popup above the clicked word
  const style = anchorRect
    ? {
        top: anchorRect.top - 160,
        left: anchorRect.left + anchorRect.width / 2 - 100
    }
    : {};

  async function handleSave() {
    if (saved) return;
    try {
      await saveWord({
        textId: word.textId,
        traditional: word.chars,
        pinyin: word.pinyin,
        meaning: word.meaning,
      });
      setSaved(true);
    } catch (err) {
      if (err?.status === 409) setSaved(true);
      console.error(err);
    }
  }

  return (
    <div ref={ref} className="word-popup" style={style}>
      <button className="word-popup__close" onClick={onClose}>✕</button>
      <p className="word-popup__pinyin">{word.pinyin}</p>
      <p className="word-popup__chars">{word.chars}</p>
      <p className="word-popup__meaning">{word.meaning}</p>
      <button 
        className={`word-popup__add${saved ? " saved" : ""}`}
        onClick={handleSave}
      >
        {saved ? "✓" : "＋"}
      </button>
    </div>
  );
}
