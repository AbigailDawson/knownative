import { HiChartBar } from 'react-icons/hi';
import './DemoDifficultyTag.scss';

//you just need to pass in "beginner", "intermediate", or "advanced" as one of the props. any other prop apart from those three will not trigger the appropriate stylings of the tag. be careful about capitalization
//if you would like to change the size of the tag, just wrap this component around a wrapper container and alter the dimensions of the wrapper container
const DemoDifficultyTag = ({ textSelection }) => {
  return (
    <>
      <span className={`difficulty-tag--${textSelection}`}>
        <HiChartBar /> {`${textSelection[0].toUpperCase() + textSelection.slice(1)}`}{' '}
      </span>
    </>
  );
};

export default DemoDifficultyTag;
