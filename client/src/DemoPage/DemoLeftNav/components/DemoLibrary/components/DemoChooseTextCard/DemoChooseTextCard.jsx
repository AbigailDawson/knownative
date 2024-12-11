import { useState } from 'react';
import './DemoChooseTextCard.scss';
import DemoDifficultyTag from '../../../../../components/DemoDifficultyTag/DemoDifficultyTag';
import DemoPreviewTextModal from '../DemoPreviewTextModal/DemoPreviewTextModal';

//Conditional rendering will determine what stylings each of the demochoosetextcards will take. 
//There will be different stylings based on whether it is the active text (under currently reading) and if it's the first text in the bookshelf.
const DemoChooseTextCard = ({
  setTextSelection,
  textSelection,
  isActiveText,
  isTopOfBookshelf,
  setLocalSavedWords,
  textTitle
}) => {
  const [showPreviewTextModal, setShowPreviewTextModal] = useState(false);

  function handleTextCardClick() {
    setShowPreviewTextModal(true);
  }

  return (
    <>
      <article
        className={`demo-choose-text-card ${
          isActiveText ? `demo-choose-text-card__currently-reading` : `demo-choose-text-card__bookshelf-cards`
        } ${isTopOfBookshelf && `demo-choose-text-card__bookshelf-cards--top`}`}
        onClick={!isActiveText ? handleTextCardClick : null}>
        <section>
          <h3 className="demo-choose-text-card__chinese-characters zh">{textTitle}</h3>
          <article>
            <DemoDifficultyTag textSelection={textSelection} />
          </article>
        </section>
      </article>
      <DemoPreviewTextModal
        showPreviewTextModal={showPreviewTextModal}
        setShowPreviewTextModal={setShowPreviewTextModal}
        textSelection={textSelection}
        setTextSelection={setTextSelection}
        setLocalSavedWords={setLocalSavedWords}
      />
    </>
  );
};

export default DemoChooseTextCard;
