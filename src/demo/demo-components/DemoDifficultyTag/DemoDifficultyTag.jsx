import { HiChartBar } from "react-icons/hi";
import "./DemoDifficultyTag.css";

const DemoDifficultyTag = ({ textSelection }) => {
  return (
    <>
      <span className={`demo-difficulty-tag-${textSelection}`}>
        <HiChartBar />{" "}
        {`${textSelection[0].toUpperCase() + textSelection.slice(1)}`}{" "}
      </span>
    </>
  );
};

export default DemoDifficultyTag;
