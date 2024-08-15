import React, { useState, useEffect, useRef } from 'react';
import './DemoWelcomeModal.css';
import DemoModal from '../DemoModal/DemoModal';

const DemoWelcomeModal = ({ onSubmit, isOpen, onClose }) => {
  const focusInputRef = useRef(null);
  const [pageCount, setPageCount] = useState(1);
  const [textSelection, setTextSelection] = useState('beginner')

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current.focus();
      }, 0);
    }
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(textSelection);
  };

  const onRadioChange = e => {
    setTextSelection(e.target.value)
  }

  return (
    <DemoModal hasCloseBtn={false} isOpen={isOpen} onClose={onClose} hasEscKey={false}>

    <div className="dialog-padding">
      {/* Modal Page 1 */}
      {pageCount === 1 ? 
        <div className="page-one">
            <div className="progress-div">
                <div className="progress-dashes active"></div>
                <div className="progress-dashes inactive"></div>
                <div className="progress-dashes inactive"></div>
            </div>
            <h1>Welcome to KnowNative!</h1>
            <p>KnowNative can help you read and study texts written in Mandarin Chinese.</p>
            <p>We'll help you choose a <span className="bolded">sample text</span> for this demo based on your language level. In the full version of KnowNative, you can use any text you like.</p>
        </div>
      : ""}

      {/* Modal Page 2 */}
      {pageCount === 2 ? 
        <div className="page-two">
          <div className="progress-div">
              <div className="progress-dashes active"></div>
              <div className="progress-dashes active"></div>
              <div className="progress-dashes inactive"></div>
          </div>
          <h1>Choose your level</h1>
          <p>How would you describe your proficiency in Mandarin Chinese?</p>
          <form>
              <label htmlFor="beginnerRadioButton">
                  <div 
                  className={`radio-div beginner-div 
                    ${textSelection === "beginner" ? "active-radio-div" : ""}`}
                  >
                      <input 
                        type="radio" 
                        value="beginner" 
                        id="beginnerRadioButton" 
                        checked={textSelection === "beginner"} 
                        onChange={onRadioChange}
                      />
                      <h3>Beginner</h3>
                      <span>TOCFL 1-2</span>
                      <p>You can understand and use simple words and phrases.</p>
                  </div>
              </label>

              <label htmlFor="intermediateRadioButton">
                  <div 
                    className={`radio-div intermediate-div 
                    ${textSelection === "intermediate" ? "active-radio-div" : ""}`}
                  >
                      <input 
                        type="radio" 
                        value="intermediate" 
                        id="intermediateRadioButton" 
                        checked={textSelection === "intermediate"}
                        onChange={onRadioChange} 
                      />
                      <h3>Intermediate</h3>
                      <span>TOCFL 3-4</span>
                      <p>You can conduct basic communication in daily life, study, and work. You can manage most communication when traveling in China.</p>
                  </div>
              </label>

              <label htmlFor="advancedRadioButton">
                  <div 
                    className={`radio-div advanced-div 
                    ${textSelection === "advanced" ? "active-radio-div" : ""}`}
                  >
                      <input 
                        type="radio" 
                        value="advanced" 
                        id="advancedRadioButton" 
                        checked={textSelection === "advanced"} 
                        onChange={onRadioChange}
                      />
                      <h3>Advanced</h3>
                      <span>TOCFL 5-6</span>
                      <p>You can read Chinese newspapers and magazines, watch Chinese films and TV shows, and can write and deliver a full speech.</p>
                  </div>
              </label>
          </form>
        </div> 
      : ""}
      
      {/* Modal Page 3 */}
      {pageCount === 3 ? 
        <div className="page-three">
          <div className="progress-div">
              <div className="progress-dashes active"></div>
              <div className="progress-dashes active"></div>
              <div className="progress-dashes active"></div>
          </div>
          <h1>Great!</h1>
          <p>Let's get started with a <span id="textChoice" className="bolded">{textSelection}</span>-level text.</p>
          <p>You can choose a different text at any time using the Library icon in the left toolbar.</p>
        </div>
      : ""}

      {/* Conditionally render buttons depending on pageState */}
      <div className="button-div">
        {pageCount === 3 ?  
          <button className="exit next" onClick={handleSubmit}>Let's go!</button>
        : ""}

        {pageCount !== 3 ? 
          <button 
              className="dialog-two next" 
              onClick={() => setPageCount((pageCount) => pageCount + 1)}
              >
                Next
          </button>
        : ""}

        {pageCount !==1 ? 
          <button 
          className="dialog-three back" 
          onClick={() => setPageCount((pageCount) => pageCount - 1)}
          >
            Back
        </button>
        : ""}
      </div>

    </div> 
    </DemoModal>
  );
};

export default DemoWelcomeModal;
