import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import "./DemoEditWordModal.css";
import { useAsyncError } from "react-router-dom";

function DemoEditWordModal({
  showingEditWordModal,
  setShowingEditWordModal,
  word,
}) {
  console.log(word);
  /* 
  {pinyin: 'zài', meaning: '(located) at', charGroup: '在', _id: 0}
  */
  const [inputTerm, setTerm] = useState(word.charGroup);
  const [inputReading, setInputReading] = useState(word.pinyin);
  const [inputMeaning, setInputMeaning] = useState(word.meaning);

  function handleCloseEditModal() {
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
          <h2>Reading</h2>
          <h2>Meaning</h2>
        </Modal.Body>
        <Modal.Footer className="edit-word-modal-footer">
          <button className="edit-word-modal-delete-btn">Delete</button>
          <button className="edit-word-modal-save-btn">Save</button>
        </Modal.Footer>
      </main>
    </Modal>
  );
}

export default DemoEditWordModal;
