import { useEffect, useRef, useState } from "react";
import { saveWord } from "../../../../utilities/words-api";
import { SavedWordsProvider, useSavedWordsContext } from '../../../../contexts/SavedWords/SavedWordsProvider'
import "./WordPopup.scss";

export default function WordPopup({ word, anchorRect, onClose }) {
  const ref = useRef(null);
  const [saved, setSaved] = useState(false);
  const { savedWords } = useSavedWordsContext();
  console.log('Here you have your savedWords: ', savedWords)

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

  // Check if the word is already saved:
  useEffect(() => {
    const isWordSaved = savedWords.some((savedWord) => {
      console.log(`Comparing ${savedWord.frontProperties.traditional} to ${word.chars}`)
      return savedWord.frontProperties.traditional === word.chars;
    });
    console.log('Is the word saved? ', isWordSaved)
    setSaved(isWordSaved);
    console.log('Checking if saved. Saved: ', saved)
  }, [savedWords, word.chars])

  async function handleSave() {
    console.log('Handling Saved')
    console.log('Word seems to be saved? ', saved)
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
        className={`word-popup__add${saved ? " word-popup__add--saved" : ""}`}
        onClick={handleSave}
      >
        {saved ? "✓" : "＋"}
      </button>
    </div>
  );
}
