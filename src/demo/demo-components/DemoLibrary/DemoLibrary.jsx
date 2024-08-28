import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { HiChartBar } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import "./DemoLibrary.css";
import DemoDifficultyTag from "../DemoDifficultyTag/DemoDifficultyTag";

function DemoLibrary({
  handleBackArrowClick,
  textSelection,
  setTextSelection,
}) {
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
        <article className="demo-library-currently-reading demo-library-text-card">
          <section>
            <h3 className="demo-library-chinese-characters">天氣</h3>
            <article>
              <DemoDifficultyTag difficulty={"beginner"} />
            </article>
          </section>
          <section>
            <FaSearch />
          </section>
        </article>
        {/* Text cards to be implemented here */}
      </section>
      <section className="demo-library-bookshelf-container">
        <h5 className="demo-library-bookshelf-label">Bookshelf:</h5>
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
      </section>
    </main>
  );
}
export default DemoLibrary;
