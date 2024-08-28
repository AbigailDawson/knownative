import React from "react";
import "./DemoChooseTextCard.css";
import { FaSearch } from "react-icons/fa";
import DemoDifficultyTag from "../DemoDifficultyTag/DemoDifficultyTag";

//conditional rendering will determine what stylings each of the demochoosetextcards will take. there will be different stylings based on whether it is the active text (under currently reading) and if it's the first text in the bookshelf
const DemoChooseTextCard = ({
  textSelection,
  isActiveText,
  isTopOfBookshelf,
}) => {
  return (
    <article
      className={`demo-choose-text-card ${
        isActiveText
          ? `demo-choose-text-currently-reading`
          : `demo-choose-text-bookshelf-cards`
      } ${isTopOfBookshelf && `demo-choose-text-top-bookshelf-card`}`}
    >
      <section>
        <h3 className="demo-choose-text-chinese-characters">天氣</h3>
        <article>
          <DemoDifficultyTag textSelection={textSelection} />
        </article>
      </section>
      <section>
        <FaSearch
          className={`${isActiveText && "demo-choose-text-hide-visibility"}`}
        />
      </section>
    </article>
  );
};

export default DemoChooseTextCard;
