import React, { useState, useEffect, useRef } from 'react';
import './DemoWelcomeModal.scss';
import DemoModal from '../DemoModal/DemoModal';

const DemoWelcomeModal = ({ onSubmit, isOpen, onClose, textSelection, setTextSelection }) => {
  const focusInputRef = useRef(null);
  const [pageCount, setPageCount] = useState(1);

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

  const onRadioChange = (e) => {
    setTextSelection(e.target.value);
  };

  return (
    <DemoModal hasCloseBtn={false} isOpen={isOpen} onClose={onClose} hasEscKeyExit={false}>
      <div className="demo-modal">
        {/* Modal Page 1 */}
        {pageCount === 1 ? (
          <div aria-label='page-one'>
            <div className="demo-modal__progress">
              <div className="demo-modal__progress-dashes demo-modal__progress-dashes--active"></div>
              <div className="demo-modal__progress-dashes demo-modal__progress-dashes--inactive"></div>
              <div className="demo-modal__progress-dashes demo-modal__progress-dashes--inactive"></div>
            </div>
            <h1 className="demo-modal__title">Welcome to KnowNative!</h1>
            <p>KnowNative can help you read and study articles written in Mandarin.</p>
            <p>
              We&apos;ll help you choose a{' '}
              <span className="bold">sample article</span> for this demo based on your
              language level. No prior knowledge of Mandarin is needed to explore this demo!
            </p>
          </div>
        ) : (
          ''
        )}

        {/* Modal Page 2 */}
        {pageCount === 2 ? (
          <div aria-label="page-two">
            <div className="demo-modal__progress">
              <div className="demo-modal__progress-dashes demo-modal__progress-dashes--active"></div>
              <div className="demo-modal__progress-dashes demo-modal__progress-dashes--active"></div>
              <div className="demo-modal__progress-dashes demo-modal__progress-dashes--inactive"></div>
            </div>
            <h1 className="demo-modal__title">Choose your level</h1>
            <p>How would you describe your proficiency in Mandarin?</p>
            <form>
              <label className='demo-modal__label' htmlFor="beginnerRadioButton" aria-label='Beginner'>
                <div
                  className={`demo-modal__level
                   ${textSelection === 'beginner' ? 'demo-modal__level--active' : ''}`}>
                  <input
                    type="radio"
                    value="beginner"
                    id="beginnerRadioButton"
                    checked={textSelection === 'beginner'}
                    onChange={onRadioChange}
                  />
                  <h3>Beginner</h3>
                  <span>TOCFL 1-2</span>
                  <p>
                    You have no knowledge of Mandarin, or you can understand simple words and
                    phrases.
                  </p>
                </div>
              </label>

              <label className='demo-modal__label' htmlFor="intermediateRadioButton" aria-label='Intermediate'>
                <div
                  className={`demo-modal__level
                   ${textSelection === 'intermediate' ? 'demo-modal__level--active' : ''}`}>
                  <input
                    type="radio"
                    value="intermediate"
                    id="intermediateRadioButton"
                    checked={textSelection === 'intermediate'}
                    onChange={onRadioChange}
                  />
                  <h3>Intermediate</h3>
                  <span>TOCFL 3-4</span>
                  <p>
                    You can read and understand articles related to familiar topics, such as family,
                    hobbies and travel.
                  </p>
                </div>
              </label>

              <label className='demo-modal__label' htmlFor="advancedRadioButton" aria-label='Advanced'>
                <div
                  className={`demo-modal__level
                   ${textSelection === 'advanced' ? 'demo-modal__level--active' : ''}`}>
                  <input
                    type="radio"
                    value="advanced"
                    id="advancedRadioButton"
                    checked={textSelection === 'advanced'}
                    onChange={onRadioChange}
                  />
                  <h3>Advanced</h3>
                  <span>TOCFL 5-6</span>
                  <p>
                    You can read and understand the content of newspapers, magazines and other
                    articles on complex topics.
                  </p>
                </div>
              </label>
            </form>
          </div>
        ) : (
          ''
        )}

        {/* Modal Page 3 */}
        {pageCount === 3 ? (
          <div aria-label="page-three">
            <div className="demo-modal__progress">
              <div className="demo-modal__progress-dashes demo-modal__progress-dashes--active"></div>
              <div className="demo-modal__progress-dashes demo-modal__progress-dashes--active"></div>
              <div className="demo-modal__progress-dashes demo-modal__progress-dashes--active"></div>
            </div>
            <h1 className="demo-modal__title">Great!</h1>
            <p>
              Let&apos;s get started with a{' '}
              <span id="textChoice" className="bold">
                {textSelection}
              </span>
              -level text.
            </p>
            <p>
              You can choose a different text at any time using the Library icon in the left
              toolbar.
            </p>
          </div>
        ) : (
          ''
        )}

        {/* Conditionally render buttons depending on pageState */}
        <div className="demo-modal__buttons-container">
          {pageCount === 3 ? (
            <button className="demo-modal__button demo-modal__button--next" onClick={handleSubmit}>
              Let&apos;s go!
            </button>
          ) : (
            ''
          )}

          {pageCount !== 3 ? (
            <button
              className="demo-modal__button demo-modal__button--next"
              onClick={() => setPageCount((pageCount) => pageCount + 1)}>
              Next
            </button>
          ) : (
            ''
          )}

          {pageCount !== 1 ? (
            <button
              className="demo-modal__button demo-modal__button--back"
              onClick={() => setPageCount((pageCount) => pageCount - 1)}>
              Back
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </DemoModal>
  );
};

export default DemoWelcomeModal;
