import React from "react";
import "./DemoChooseTextCard.css";
import { FaSearch } from "react-icons/fa";
import DemoDifficultyTag from "../DemoDifficultyTag/DemoDifficultyTag";

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

/*
<article className="demo-library-text-card demo-library-top-bookshelf-card demo-library-bookshelf-cards">
          <section>
            <h3 className="demo-library-chinese-characters">天氣</h3>
            <article>
              <DemoDifficultyTag difficulty={"intermediate"} />
            </article>
          </section>
          <section>
            <FaSearch />
          </section>
        </article>
        <article className="demo-library-text-card demo-library-bookshelf-cards">
          <section>
            <h3 className="demo-library-chinese-characters">天氣</h3>
            <article>
              <DemoDifficultyTag difficulty={"advanced"} />
            </article>
          </section>
          <section>
            <FaSearch />
          </section>
        </article>
*/
