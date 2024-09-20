import { useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./DemoLibrary.css";
import DemoChooseTextCard from "../DemoChooseTextCard/DemoChooseTextCard";

function DemoLibrary({
  handleBackArrowClick,
  textSelection,
  setTextSelection,
  setLocalSavedWords,
  demoTexts
}) {
  const [mainText, setMainText] = useState(textSelection);
  const [bookshelfTexts, setBookShelfTexts] = useState([]);

  useEffect(() => {
    //the filtered books will determine what goes in the "bookshelf" section. all of this will be based on the textSelection variable, which is determined by the welcome modal.
    const difficulties = ["beginner", "intermediate", "advanced"];
    const filteredBooks = difficulties.filter(
      (difficulty) => difficulty !== textSelection
    );

    //maintext will go under "currently reading" header
    setMainText(textSelection);
    setBookShelfTexts(filteredBooks);
  }, [textSelection]);

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
        <p>
          Choose a different text for this demo by clicking the magnifying glass
          icons in the Bookshelf section. You will be able to see a preview of
          the text prior to loading it.
        </p>
        <p>
          In the full version of KnowNative, you can import any text you want.
        </p>
      </section>
      <section className="demo-library-currently-reading-container">
        <h5>Currently Reading:</h5>
        <DemoChooseTextCard
          textSelection={mainText}
          isActiveText={true}
          isTopOfBookshelf={false}
          textTitle={demoTexts[textSelection].title}
        />
      </section>
      <section className="demo-library-bookshelf-container">
        <h5 className="demo-library-bookshelf-label">Bookshelf:</h5>
        {bookshelfTexts.map((difficulty, i) => {
          return (
            <DemoChooseTextCard
              setTextSelection={setTextSelection}
              textSelection={difficulty}
              isActiveText={false}
              isTopOfBookshelf={i === 0}
              setLocalSavedWords={setLocalSavedWords}
              key={difficulty + i + "bookshelf"}
              textTitle={demoTexts[difficulty].title}
            />
          );
        })}
      </section>
    </main>
  );
}
export default DemoLibrary;
