import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import "./DemoEditWordModal.css";

function DemoEditWordModal({
  showingEditWordModal,
  setShowingEditWordModal,
  word,
  updateWord,
  handleDeleteWord,
}) {
  console.log(word);
  const [inputTerm, setInputTerm] = useState(word.charGroup);
  const [inputReading, setInputReading] = useState(word.pinyin);
  const [inputMeaning, setInputMeaning] = useState(word.meaning);

  //for closing the modal
  function handleCloseEditModal() {
    setShowingEditWordModal(false);
  }

  //functions that allow for a user to edit the term, reading, and meaning of a word in the edit word form
  function handleInputTermChange(e) {
    setInputTerm(e.target.value);
  }
  function handleInputReadingChange(e) {
    setInputReading(e.target.value);
  }
  function handleInputMeaningChange(e) {
    setInputMeaning(e.target.value);
  }

  //function to actually save the changes when a user clicks on save
  function handleUpdateWord() {
    updateWord(word, inputMeaning, inputTerm, inputReading);
    setShowingEditWordModal(false);
  }

  return (
    <Modal
      show={showingEditWordModal}
      centered
      backdropClassName="edit-word-modal-backdrop"
      onHide={handleCloseEditModal}
    >
      <main className="edit-word-modal">
        <Modal.Header className="edit-word-modal-header">
          <Modal.Title className="edit-word-modal-title-container">
            <header className="edit-word-modal-title">
              <h1>Edit Card</h1>
              <FaPencilAlt />
            </header>
            <BsX
              className="edit-word-modal-exit-icon"
              onClick={handleCloseEditModal}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-word-modal-body">
          <h2>Term</h2>
          <textarea
            className="edit-word-modal-textarea"
            rows="3"
            value={inputTerm}
            onChange={handleInputTermChange}
          />
          <h2>Reading</h2>
          <textarea
            className="edit-word-modal-textarea"
            rows="3"
            value={inputReading}
            onChange={handleInputReadingChange}
          />
          <h2>Meaning</h2>
          <textarea
            className="edit-word-modal-textarea"
            rows="3"
            value={inputMeaning}
            onChange={handleInputMeaningChange}
          />
        </Modal.Body>
        <Modal.Footer className="edit-word-modal-footer">
          <button
            className="edit-word-modal-delete-btn"
            onClick={handleDeleteWord}
          >
            Delete
          </button>
          <button
            className="edit-word-modal-save-btn"
            onClick={handleUpdateWord}
          >
            Save
          </button>
        </Modal.Footer>
      </main>
    </Modal>
  );
}

export default DemoEditWordModal;
