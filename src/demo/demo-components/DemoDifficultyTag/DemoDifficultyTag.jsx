import { HiChartBar } from "react-icons/hi";
import "./DemoDifficultyTag.css";

const DemoDifficultyTag = ({ difficulty }) => {
  return (
    <>
      <span className={`demo-difficulty-tag-${difficulty}`}>
        <HiChartBar /> {`${difficulty[0].toUpperCase() + difficulty.slice(1)}`}{" "}
      </span>
    </>
  );
};

export default DemoDifficultyTag;
