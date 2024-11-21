import './DemoPreviewTextModal.scss';
import { Modal } from 'react-bootstrap';
import { BsX } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import DemoDifficultyTag from '../../../../../components/DemoDifficultyTag/DemoDifficultyTag';
import demoTexts from '../../../../../demodata';

function DemoPreviewTextModal({
  showPreviewTextModal,
  setShowPreviewTextModal,
  textSelection,
  setTextSelection,
  setLocalSavedWords
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
      backdrop
      ClassName="show-preview-modal__backdrop"
      onHide={handleCloseShowPreviewModal}
      size="lg">
      <main className="show-preview-modal">
        <Modal.Header>
          <Modal.Title className="show-preview-modal__header">
            <p className="show-preview-modal__header--message">
              <strong>This is a preview.</strong> Click &quot;Load Text&quot; to replace your
              current text with this one. <strong>WARNING:</strong> your current list of saved words
              WILL BE LOST when the text is changed.
            </p>
            <BsX className="show-preview-modal__exit-button" onClick={handleCloseShowPreviewModal} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-preview-modal__body">
          <h3 className="show-preview-modal__chinese-character zh">
            {demoTexts[textSelection].title}
          </h3>
          <section className="show-preview-modal__difficulty-source-container">
            <article className="show-preview-modal__difficulty-tag">
              <DemoDifficultyTag textSelection={textSelection} />
            </article>
            <a
              href={demoTexts[textSelection].source}
              className="show-preview-modal__view-source"
              target="_blank"
              rel="noreferrer">
              View Source <BiLinkExternal />
            </a>
          </section>
          <section className="show-preview-modal__body show-preview-modal__body--text zh">
            <p>
              {demoTexts[textSelection].content.slice(0, 75)}
              ...
            </p>
          </section>
        </Modal.Body>
        <Modal.Footer className="show-preview-modal__footer">
          <section className="show-preview-modal__buttons">
            <button className="show-preview-modal__buttons--load" onClick={handleLoadNewText}>
              <strong>Load Text</strong>
            </button>
            <button className="show-preview-modal__buttons--close" onClick={handleCloseShowPreviewModal}>
              <strong>Close</strong>
            </button>
          </section>
        </Modal.Footer>
      </main>
    </Modal>
  );
}

export default DemoPreviewTextModal;
