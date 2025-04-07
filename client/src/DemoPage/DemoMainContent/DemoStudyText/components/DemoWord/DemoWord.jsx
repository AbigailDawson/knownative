import React from 'react';
import './DemoWord.scss';

export default function DemoWord({ word, pinyin, meaning, isSaved, isSpecialChar, onClick }) {
  return (
    <div className={`study-word ${isSpecialChar ? 'specialChar' : ''}`}>
      <p
        className={`zh study-word__zh ${isSaved ? 'study-word__zh--saved' : ''}`}
        onClick={!isSpecialChar ? onClick : undefined}
        style={{ color: isSaved ? '#056a6d' : 'var(--dark)' }}>
        {word.text}
      </p>
      <div className="study-word__annotation" style={{ visibility: isSaved ? 'visible' : 'hidden' }}>
        <p className="study-word__pinyin">{pinyin}</p>
        <p className="study-word__meaning">{meaning}</p>
      </div>
    </div>
  );
}
