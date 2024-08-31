import "./DemoPreviewTextModal.css";
import { Modal } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import DemoDifficultyTag from "../DemoDifficultyTag/DemoDifficultyTag";

const demoTexts = {
  beginner: {
    title: `開計程車`,
    source: `https://tocfl.edu.tw/assets/files/mock/rd_mock_test_BandA_en_t.pdf`,
    content: `每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！`,
  },

  intermediate: {
    title: `信用卡雖然很方便`,
    source: `https://tocfl.edu.tw/assets/files/rd_mock_test_BandB_t.pdf`,
    content: `信用卡雖然很方便，但是不小心的話，一下子就會花掉很多錢，所以現在還不了錢的人越來越多。像是奇美，她用信用卡買了太多東西，結果沒辦法還錢，所以必須同時做三份工作，把賺來的錢全部還給銀行。會出現這樣的問題，主要是因為使用信用卡的人常常沒什麼錢卻買很多東西，而且還會不清楚自己花了多少錢；另一個原因是，現在的銀行對使用者的要求越來越低，連沒有工作的學生也能申請信用卡，對還錢的方式一開始也說得不清楚。結果這張給人方便的卡片也給人們帶來了很大的麻煩。`,
  },

  advanced: {
    title: `祝你今年快樂`,
    source: `https://tocfl.edu.tw/assets/files/mock/rd_mock_test_BandC_t_2022.pdf`,
    content: `我常想，住豪宅或是升職、加薪，真能讓人快樂嗎？讀完鮑教授新作《祝你今年快樂》後，便發覺那都只能算是一閃即逝的喜悅，並非真實而長久。誠如書中所言：「快樂是一種遍布在生命之中，滿足和幸福的感受，而喜悅則像煙火，稍縱即逝。」
      或許你認為這道理誰都懂，然想遠比做容易。這本書告訴我們兩件事：快樂是需要練習的；再則，追兔子的狗，比躺在門廊上睡覺的狗更快樂！這原理並非為捉到兔子能令人快樂，而是當我們為突破挑戰與困境而忙碌時，往往能從中發現自己的才能，找出更多存在的價值。這也說明了為何許多不需要克服難題的有錢人，其實並不快樂。
      這讓我想起《國家科學院期刊》一項調查結果，他們發現 50％的快樂，由快樂的設定點決定，生活條件只佔 10％，剩下的 40％則取決於行動。換言之，快樂是由思維主導的。鮑教授也在書中舉例，大腦重僅 1.35 公斤，佔人體的比重很小，卻指引全身動作，進而導引人生的發展。就像體重數十公斤的飛行員，卻要駕駛重達數十萬公斤的飛機，飛機雖沉重、力量強大，但只按飛行員導引的方向飛行。
      最近我依著鮑教授的建議，開始練習微笑，心中同時想著「我很快樂」，也似乎真找出了環境或生活中讓自己快樂的事，看來此法確實值得大家一試。不過據我的實作經驗顯示，有件事得注意，就是千萬別說出「我想要快樂」。一旦你這麼說，等於承認自己是在不快樂的狀態之下，反而容易弄巧成拙。`,
  },
};

function DemoPreviewTextModal({
  showPreviewTextModal,
  setShowPreviewTextModal,
  textSelection,
  setTextSelection,
}) {
  function handleCloseShowPreviewModal() {
    setShowPreviewTextModal(false);
  }

  function handleLoadNewText() {
    setTextSelection(textSelection);
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
              View Source
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
        <Modal.Footer className="show-preview-modal-buttons-container">
          <section>
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
