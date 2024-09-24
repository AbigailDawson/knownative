import { useState } from 'react';
import './DemoEditWordModal.css';
import Modal from '../../../components/Modal/modal';

function DemoEditWordModal({ handleDeleteWord, setShowModal, updateWord, word }) {
  const [inputTerm /*setInputTerm*/] = useState(word.charGroup);
  const [inputReading, setInputReading] = useState(word.pinyin);
  const [inputMeaning, setInputMeaning] = useState(word.meaning);

  //functions that allow for a user to edit the term, reading, and meaning of a word in the edit word form
  function handleInputReadingChange(e) {
    setInputReading(e.target.value);
  }

  function handleInputMeaningChange(e) {
    setInputMeaning(e.target.value);
  }

  //function to actually save the changes when a user clicks on save
  function handleUpdateWord() {
    updateWord(word, inputMeaning, inputTerm, inputReading);
    setShowModal(false);
  }

  return (
    <Modal
      canCloseOnEscapeKey={true}
      buttonDeleteText="Delete"
      buttonPrimaryText="Save"
      buttonSecondaryText="Cancel"
      handleDeleteButtonOnClick={handleDeleteWord}
      handleSecondaryButtonOnClick={() => setShowModal(false)}
      handlePrimaryButtonOnClick={handleUpdateWord}
      hasCloseButton={true}
      modalTitle={'Edit Card'}
      setShowModal={setShowModal}>
      <div className="edit-word-modal-content">
        <div>Term</div>
        <textarea className="edit-word-modal-textarea" value={inputTerm} disabled />
        <div>Reading</div>
        <textarea
          className="edit-word-modal-textarea"
          value={inputReading}
          onChange={handleInputReadingChange}
        />
        <div>Meaning</div>
        <textarea
          className="edit-word-modal-textarea"
          value={inputMeaning}
          onChange={handleInputMeaningChange}
        />
      </div>
    </Modal>
  );
}

export default DemoEditWordModal;
