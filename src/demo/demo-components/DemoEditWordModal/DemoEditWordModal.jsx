import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import "./DemoEditWordModal.css";

function DemoEditWordModal({
  showingEditWordModal,
  setShowingEditWordModal,
  word,
  updateMeaning,
  handleDeleteWord,
}) {
  const [inputMeaning, setInputMeaning] = useState(word.meaning);

  function handleCloseEditModal() {
    setShowingEditWordModal(false);
  }

  function handleInputMeaningChange(e) {
    setInputMeaning(e.target.value);
  }

  function handleUpdateMeaning() {
    updateMeaning(word, inputMeaning);
    setShowingEditWordModal(false);
  }

  return (
    <Modal
      show={showingEditWordModal}
      centered
      backdropClassName="edit-word-modal-backdrop"
      onHide={handleCloseEditModal}
      backdrop="static"
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
            value={word.charGroup}
          />
          <h2>Reading</h2>
          <textarea
            className="edit-word-modal-textarea"
            rows="3"
            value={word.pinyin}
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
            onClick={handleUpdateMeaning}
          >
            Save
          </button>
        </Modal.Footer>
      </main>
    </Modal>
  );
}

export default DemoEditWordModal;
