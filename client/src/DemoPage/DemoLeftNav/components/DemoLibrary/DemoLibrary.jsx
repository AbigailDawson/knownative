import { useState, useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import './DemoLibrary.scss';
import DemoChooseTextCard from './components/DemoChooseTextCard/DemoChooseTextCard';

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
    // The filtered books will determine what goes in the "bookshelf" section. 
    // All of this will be based on the textSelection variable, which is determined by the welcome modal.
    const difficulties = ['beginner', 'intermediate', 'advanced'];
    const filteredBooks = difficulties.filter((difficulty) => difficulty !== textSelection);

    //maintext will go under "currently reading" header
    setMainText(textSelection);
    setBookShelfTexts(filteredBooks);
  }, [textSelection]);

  return (
    <main className="DemoLibrary">
      <header className="DemoLibrary__header-container">
        <h1 className="DemoLibrary__sidebar-heading">Library</h1>
        <ChevronLeftIcon
          fontSize="large"
          data-tooltip-id="library-tooltip"
          onClick={handleBackArrowClick}
          className="arrowBack"
          color="#006769"
        />
      </header>
      <section className="DemoLibrary__sidebar-subtext">
        <p>
          Choose a different text for this demo. You will be able to see a preview of the text prior
          to loading it.
        </p>
        <p>In the full version of KnowNative, you can import any text you want.</p>
      </section>
      <section className="DemoLibrary__currently-reading-container">
        <h5>Currently Reading:</h5>
        <DemoChooseTextCard
          textSelection={mainText}
          isActiveText={true}
          isTopOfBookshelf={false}
          textTitle={demoTexts[textSelection].title}
        />
      </section>
      <section className="DemoLibrary__bookshelf-container">
        <h5 className="DemoLibrary__bookshelf-label">Bookshelf:</h5>
        {bookshelfTexts.map((difficulty, i) => {
          return (
            <DemoChooseTextCard
              setTextSelection={setTextSelection}
              textSelection={difficulty}
              isActiveText={false}
              isTopOfBookshelf={i === 0}
              setLocalSavedWords={setLocalSavedWords}
              key={difficulty + i + 'bookshelf'}
              textTitle={demoTexts[difficulty].title}
            />
          );
        })}
      </section>
    </main>
  );
}
export default DemoLibrary;
