import { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';
import './DemoEditWordModal.css';
import Modal from '../../../ui-components/Modal/modal';

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
      hasCloseBtn={true}
      modalTitle={'Edit Card'}
      setShowModal={setShowModal}>
      <div className="edit-word-modal-content">
        <div>Term</div>
        <textarea className="edit-word-modal-textarea" rows="3" value={inputTerm} disabled />
        <div>Reading</div>
        <textarea
          className="edit-word-modal-textarea"
          rows="3"
          value={inputReading}
          onChange={handleInputReadingChange}
        />
        <div>Meaning</div>
        <textarea
          className="edit-word-modal-textarea"
          rows="3"
          value={inputMeaning}
          onChange={handleInputMeaningChange}
        />
      </div>
      <div className="edit-modal-buttons">
        <button className="edit-word-modal-delete-btn" onClick={handleDeleteWord}>
          Delete
        </button>
        <button className="back" onClick={() => setShowModal(false)}>
          Cancel
        </button>
        <button className="demo-button continue" onClick={handleUpdateWord}>
          Save
        </button>
      </div>
    </Modal>
  );
}

export default DemoEditWordModal;
