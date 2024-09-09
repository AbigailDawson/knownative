import "./DemoPreviewTextModal.css";
import { Modal } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import DemoDifficultyTag from "../DemoDifficultyTag/DemoDifficultyTag";
import demoTexts from "../../demodata";

function DemoPreviewTextModal({
  showPreviewTextModal,
  setShowPreviewTextModal,
  textSelection,
  setTextSelection,
  setLocalSavedWords,
}) {
  function handleCloseShowPreviewModal() {
    setShowPreviewTextModal(false);
  }

  function handleLoadNewText() {
    setTextSelection(textSelection);
    setLocalSavedWords([]);
    setShowPreviewTextModal(false);
  }

  return (
    <Modal
      show={showPreviewTextModal}
      centered
      backdropClassName="show-preview-modal-backdrop"
      onHide={handleCloseShowPreviewModal}
      size="lg"
    >
      <main className="show-preview-modal">
        <Modal.Header>
          <Modal.Title className="show-preview-modal-header-container">
            <p className="show-preview-modal-header-message">
              <strong>This is a preview.</strong> Click "Load Text" to replace
              your current text with this one. <strong>WARNING:</strong> your
              current list of saved words WILL BE LOST when the text is changed.
            </p>
            <BsX
              className="show-preview-modal-exit-button"
              onClick={handleCloseShowPreviewModal}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-preview-modal-body">
          <h3 className="show-preview-modal-chinese-character">天氣</h3>
          <section className="show-preview-modal-difficulty-source-ctn">
            <article className="show-preview-modal-difficulty-tag">
              <DemoDifficultyTag textSelection={textSelection} />
            </article>
            <a
              href={demoTexts[textSelection].source}
              className="show-preview-modal-view-source"
              target="_blank"
              rel="noreferrer"
            >
              View Source <BiLinkExternal />
            </a>
          </section>
          <section className="show-preview-modal-text">
            <h3>{demoTexts[textSelection].title}</h3>
            <p>
              {demoTexts[textSelection].content.slice(0, 75)}
              ...
            </p>
          </section>
        </Modal.Body>
        <Modal.Footer className="show-preview-modal-footer">
          <section className="show-preview-modal-btns-ctn">
            <button
              className="show-preview-modal-load-text-btn"
              onClick={handleLoadNewText}
            >
              <strong>Load Text</strong>
            </button>
            <button
              className="show-preview-modal-close-btn"
              onClick={handleCloseShowPreviewModal}
            >
              <strong>Close</strong>
            </button>
          </section>
        </Modal.Footer>
      </main>
    </Modal>
  );
}

export default DemoPreviewTextModal;
