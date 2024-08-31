import "./DemoPreviewTextModal.css";
import { Modal } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import DemoDifficultyTag from "../DemoDifficultyTag/DemoDifficultyTag";

const sampleData = {
  title: `信用卡雖然很方便`,
  source: `https://tocfl.edu.tw/assets/files/rd_mock_test_BandB_t.pdf`,
  content: `信用卡雖然很方便，但是不小心的話，一下子就會花掉很多錢，所以現在還不了錢的人越來越多。像是奇美，她用信用卡買了太多東西，結果沒辦法還錢，所以必須同時做三份工作，把賺來的錢全部還給銀行。會出現這樣的問題，主要是因為使用信用卡的人常常沒什麼錢卻買很多東西，而且還會不清楚自己花了多少錢；另一個原因是，現在的銀行對使用者的要求越來越低，連沒有工作的學生也能申請信用卡，對還錢的方式一開始也說得不清楚。結果這張給人方便的卡片也給人們帶來了很大的麻煩。`,
};

function DemoPreviewTextModal({
  showPreviewTextModal,
  setShowPreviewTextModal,
  textSelection,
}) {
  function handleCloseShowPreviewModal() {
    setShowPreviewTextModal(false);
  }

  function handleLoadNewText() {
    //functionality for later...
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
              href={sampleData.source}
              className="show-preview-modal-view-source"
              target="_blank"
              rel="noreferrer"
            >
              View Source
            </a>
          </section>
          <section className="show-preview-modal-text">
            <h3>{sampleData.title}</h3>
            <p>
              {sampleData.content.slice(0, sampleData.content.length / 3)}...
            </p>
          </section>
        </Modal.Body>
        <Modal.Footer className="show-preview-modal-buttons-container">
          <section>
            <button className="show-preview-modal-load-text-btn">
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
