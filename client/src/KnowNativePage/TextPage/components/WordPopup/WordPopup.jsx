import { useEffect, useRef, useState } from "react";
import { saveWord } from "../../../../utilities/words-api";
import { getAllCards } from '../../../../utilities/cards-api'
import { useSavedWordsContext, useSavedWordsDispatch } from '../../../../contexts/SavedWords/SavedWordsProvider'
import "./WordPopup.scss";

export default function WordPopup({ word, anchorRect, onClose }) {
  const ref = useRef(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const { savedWords } = useSavedWordsContext();
  const dispatch = useSavedWordsDispatch();

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
    let finishedChecking = false;
    setLoading(true);

    const isWordSaved = savedWords.some((savedWord) => savedWord.frontProperties.traditional === word.chars);
    
    if(!finishedChecking) {
      setSaved(isWordSaved);
      setLoading(false);
    }

    return () => {
      finishedChecking = true;
    }
  }, [savedWords, word.chars])

  async function handleSave() {
    if (saved) return;
    
    setLoading(true);

    try {
      await saveWord({
        textId: word.textId,
        traditional: word.chars,
        pinyin: word.pinyin,
        meaning: word.meaning,
      });
      
      setSaved(true);
      const updatedSavedWords = await getAllCards();
      dispatch({ type: 'LOAD', data: updatedSavedWords });
    
    } catch (err) {
      if (err?.status === 409) setSaved(true);
      console.error(err);
    } finally {
      setLoading(false);
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
        disabled={loading}
      >
        {loading ? "⌛" : saved ? "✓" : "＋"}
      </button>
    </div>
  );
}
