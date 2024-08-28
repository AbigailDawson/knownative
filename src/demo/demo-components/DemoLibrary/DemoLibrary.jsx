import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { FaSearch } from "react-icons/fa";
import "./DemoLibrary.css";
import DemoDifficultyTag from "../DemoDifficultyTag/DemoDifficultyTag";
import DemoChooseTextCard from "../DemoChooseTextCard/DemoChooseTextCard";

function DemoLibrary({
  handleBackArrowClick,
  textSelection,
  setTextSelection,
}) {
  /*
  If selected, 
  (1) there should be the BORDER around it. 
  (2) There should NOT be a magnifying glass
  (3) If should be displayed SEPARATELY from the rest
  */
  return (
    <main className="DemoLibrary">
      <header className="demo-library-header-container">
        <h1 className="demo-library-sidebar-heading">Library</h1>
        <ChevronLeftIcon
          fontSize="large"
          data-tooltip-id="library-tooltip"
          onClick={handleBackArrowClick}
          className="demo-library-arrowBack"
          color="#006769"
        />
      </header>
      <section className="demo-library-subtext">
        <p>Choose a different text to use this demo.</p>
        <p>
          In the full version of KnowNative, you can import any text you want.
        </p>
      </section>
      <section className="demo-library-currently-reading-container">
        <h5>Currently Reading:</h5>
        <DemoChooseTextCard
          textSelection={"beginner"}
          isActiveText={true}
          isTopOfBookshelf={false}
        />
        {/* Text cards to be implemented here */}
      </section>
      <section className="demo-library-bookshelf-container">
        <h5 className="demo-library-bookshelf-label">Bookshelf:</h5>
        <DemoChooseTextCard
          textSelection={"intermediate"}
          isActiveText={false}
          isTopOfBookshelf={true}
        />
        <DemoChooseTextCard
          textSelection={"advanced"}
          isActiveText={false}
          isTopOfBookshelf={false}
        />
      </section>
    </main>
  );
}
export default DemoLibrary;
