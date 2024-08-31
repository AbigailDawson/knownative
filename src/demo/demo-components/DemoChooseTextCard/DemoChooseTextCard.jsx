import { useState } from "react";
import "./DemoChooseTextCard.css";
import { FaSearch } from "react-icons/fa";
import DemoDifficultyTag from "../DemoDifficultyTag/DemoDifficultyTag";
import DemoPreviewTextModal from "../DemoPreviewTextModal/DemoPreviewTextModal";

//conditional rendering will determine what stylings each of the demochoosetextcards will take. there will be different stylings based on whether it is the active text (under currently reading) and if it's the first text in the bookshelf
const DemoChooseTextCard = ({
  setTextSelection,
  textSelection,
  isActiveText,
  isTopOfBookshelf,
}) => {
  const [showPreviewTextModal, setShowPreviewTextModal] = useState(false);

  function handleMagnifyGlassClick() {
    setShowPreviewTextModal(true);
  }

  return (
    <article
      className={`demo-choose-text-card ${
        isActiveText
          ? `demo-choose-text-currently-reading`
          : `demo-choose-text-bookshelf-cards`
      } ${isTopOfBookshelf && `demo-choose-text-top-bookshelf-card`}`}
    >
      <DemoPreviewTextModal
        showPreviewTextModal={showPreviewTextModal}
        setShowPreviewTextModal={setShowPreviewTextModal}
        textSelection={textSelection}
        setTextSelection={setTextSelection}
      />
      <section>
        <h3 className="demo-choose-text-chinese-characters">天氣</h3>
        <article>
          <DemoDifficultyTag textSelection={textSelection} />
        </article>
      </section>
      <section
        className={`${
          !isActiveText && "demo-choose-text-magnify-glass-container"
        }`}
        onClick={handleMagnifyGlassClick}
      >
        <FaSearch
          className={`${isActiveText && "demo-choose-text-hide-visibility"}`}
        />
      </section>
    </article>
  );
};

export default DemoChooseTextCard;
