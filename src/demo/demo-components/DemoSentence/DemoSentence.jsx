import "./DemoSentence.css";
import * as demoAPI from "../../../utilities/demo-api";
import { useState, useEffect } from "react";
import DemoTranslation from "../DemoTranslation/DemoTranslation";

export default function DemoSentence({ sentence }) {
  const [translation, setTranslation] = useState("");
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    const fetchTranslation = async () => {
      const translatedSentence = await demoAPI.translateSentence(sentence);
      setTranslation(translatedSentence);
    };

    fetchTranslation();
  }, [sentence]);

  const handleTranslate = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <>
      <div className="sentence-line">
        {/* Google Icons translate Icon */}
        <button
          className={`material-symbols-outlined toggle-translation ${
            showTranslation ? "translation-visible" : ""
          }`}
          onClick={() => handleTranslate(sentence)}
        >
          translate
        </button>
        <span className="sentence zh">{sentence}</span>
      </div>
      {translation && (
        <DemoTranslation translation={translation} show={showTranslation} />
      )}
    </>
  );
}
