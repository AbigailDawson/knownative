import React from 'react';
import './slider.scss';

const Slider = ({ isOpen, onClose, onSuccess }) => {
  return (
    <div className={`slider ${isOpen ? 'open' : ''}`}>
      <div className="slider__content">
        <button className="slider__close" aria-label="Close slider" onClick={onClose}>
          ×
        </button>
        <div className="slider__header">
          <h1 className="slider__title">Saved Cards</h1>
        </div>
        <div className="slider__body">
          <p className="slider__description">
            Expand your vocabulary with the words you’ve saved. Reviewing them regularly helps
            reinforce learning!
          </p>
          {/* Placeholder cards */}
          <div className="slider__card">
            <h3>Placeholder Term</h3>
            <p>This is an example definition...</p>
          </div>
        </div>
        <div className="slider__footer">
          <button className="slider__confirm" onClick={onSuccess}>
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
