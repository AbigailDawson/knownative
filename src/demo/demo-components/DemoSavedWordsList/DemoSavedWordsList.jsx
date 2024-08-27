import "./DemoSavedWordsList.css";
import { useState } from "react";
import DemoSavedWord from "../DemoSavedWord/DemoSavedWord";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function DemoSavedWordsList({
    savedWords,
    updateWord,
    deleteWord,
    gameInProgress,
    handleBackArrowClick,
}) {
    const [editingWord, setEditingWord] = useState(null);

    const savedWordItems = savedWords.map((word) => (
        <DemoSavedWord
            key={word._id}
            word={word}
            updateWord={updateWord}
            isEditingWord={editingWord === word._id}
            setIsEditingWord={setEditingWord}
            deleteWord={deleteWord}
        />
    ));

    return (
        <div className="SavedWordsList">
            <header className="demo-saved-words-header-container">
                <h3 className="sidebar-heading">Saved Words</h3>
                <div>
                    <ChevronLeftIcon
                        fontSize="large"
                        data-tooltip-id="savedwords-tooltip"
                        onClick={handleBackArrowClick}
                        className="arrowBack"
                        color="#006769"
                    />
                </div>
            </header>
            {savedWords.length === 0 ? (
                <>
                    <p>No words have been saved yet!</p>
                    <br></br>
                    <p>
                        Get started by navigating to the Study tab and selecting
                        some words you'd like to study.
                    </p>
                </>
            ) : (
                <>
                    <article className="saved-words-list-container">
                        {!gameInProgress && savedWordItems}
                    </article>
                </>
            )}
            <button className="add-word-btn">+</button>
        </div>
    );
}

/* 
Old code (in case it's needed) 
   {savedWords.length === 0 ? (
        <>
          <p>No words have been saved yet!</p>
          <br></br>
          <p>
            Get started by navigating to the Study tab and selecting some words
            you'd like to study.
          </p>
        </>
      ) : (
        <>
          {/* <div className="study-btn">
            <TbCardsFilled className="study-icon" onClick={handleOpen} />
            <p className="study-btn-txt"> </p>
          </div>}
          <article className="saved-words-list-container">
            {!gameInProgress && savedWordItems}
          </article>
        </>
      )}
      <button className="add-word-btn">+</button>
    </div>
*/
