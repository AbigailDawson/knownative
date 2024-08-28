import React from "react";
import { HiChartBar } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

const DemoChooseTextCard = () => {
  return (
    <article className="demo-library-currently-reading">
      <section>
        <h3 className="demo-library-chinese-characters">天氣</h3>
        <article>
          <span className="demo-library-difficulty-tag-beginner">
            <HiChartBar /> Beginner{" "}
          </span>
        </article>
      </section>
      <section>
        <FaSearch />
      </section>
    </article>
  );
};

export default DemoChooseTextCard;
