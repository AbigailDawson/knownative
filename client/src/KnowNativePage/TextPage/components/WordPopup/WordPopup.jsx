import { useEffect, useRef } from "react";
import "./WordPopup.scss";

export default function WordPopup({ word, anchorRect, onClose }) {
  const ref = useRef(null);

  // close popup if clicked outside of it
  useEffect(() => {
    const handle = (e) => !ref.current?.contains(e.target) && onClose();
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);

  // position popup above the clicked word
  const style = anchorRect
    ? { top: anchorRect.top - 160, left: anchorRect.left }
    : {};

  return (
    <div ref={ref} className="word-popup" style={style}>
      <button className="word-popup__close" onClick={onClose}>✕</button>
      <p className="word-popup__pinyin">{word.pinyin}</p>
      <p className="word-popup__chars">{word.chars}</p>
      <p className="word-popup__meaning">{word.meaning}</p>
      <button className="word-popup__add">＋</button>
    </div>
  );
}
