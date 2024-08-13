import { useState, useEffect } from "react";
import "./DemoTextPage.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent
} from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import DemoStudyText from "../../demo-components/DemoStudyText/DemoStudyText";
import DemoReadText from "../../demo-components/DemoReadText/DemoReadText";
import DemoTranslateText from "../../demo-components/DemoTranslateText/DemoTranslateText";
import DemoSavedWordsList from "../../demo-components/DemoSavedWordsList/DemoSavedWordsList";
import DemoFlashcard from "../../demo-components/DemoFlashcard/DemoFlashcard";
import DemoFlashcardForm from "../../demo-components/DemoFlashcardForm/DemoFlashcardForm";
import DemoInfoSidebar from "../../demo-components/DemoInfoSidebar/DemoInfoSidebar";
import DemoNav from "../../demo-components/DemoNav/DemoNav";
import DemoExitModal from "../../demo-components/DemoExitModal/DemoExitModal";
import DemoLibrary from "../../demo-components/DemoLibrary/DemoLibrary";
//import * as textsAPI from "../../../utilities/texts-api";
//import * as wordsAPI from "../../../utilities/words-api";
import { getWordInfo } from "../../../utilities/words-service";
//import word from '../../../../models/word';

export default function DemoTextPage({ getText, updateText }) {
  const text = {
    _id: "1",
    title: "10 個台灣人最愛去的日本城市！",
    content:
      "位在日本本州中部的靜岡縣，鄰近神奈川縣...",
    source:
      "https://www.housefeel.com.tw/article/...",
    favorite: false,
    archived: false,
    easierText: "",
  };

  const [activeTab, setActiveTab] = useState("read");

  // --- SAVED WORDS ---
  const [localSavedWords, setLocalSavedWords] = useState(
    JSON.parse(localStorage.getItem("stringifiedWords")) || []
  );
  // const [savedWords, setSavedWords] = useState([]);
  const [activeWord, setActiveWord] = useState(null);
  const [expandedSidebar, setExpandedSidebar] = useState(false);

  // --- POPUP ---
  const [showPopup, setShowPopup] = useState(false);

  // --- MODALS ---
  const [showExitModal, setShowExitModal] = useState(false);
  const handleShowExit = () => setShowExitModal(true);
  const handleCloseExit = () => setShowExitModal(false);

  // --- FLASHCARDS ---
  const [open, setOpen] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [selectedFront, setSelectedFront] = useState("chinese");
  const [showPinyin, setShowPinyin] = useState(true);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [remainingCount, setRemainingCount] = useState(0);

  useEffect(
    function () {
      function setLocalStorage() {
        localStorage.setItem(
          "stringifiedWords",
          JSON.stringify(localSavedWords)
        );
      }
      setLocalStorage();
    },
    [localSavedWords]
  );

  function getFlashcards() {
    const flashcardsArray = localSavedWords.map((word) => ({
      chinese: word.charGroup,
      pinyin: word.pinyin,
      meaning: word.meaning,
      id: word._id,
    }));
    setFlashcards(flashcardsArray);
  }

  function handleTabClick(tabName) {
    setActiveTab(tabName);
  }

  // async function favoriteText(text, textId) {
  //   const updatedText = await textsAPI.favoriteText(text, textId);
  //   updateText(updatedText);
  // }

  // async function saveWord(word, textId) {
  //   const savedWord = await textsAPI.saveWord(word, textId);
  //   setSavedWords([...savedWords, savedWord]);
  //   setActiveWord("");
  //   setShowPopup(false);
  // }

  function generateID() {
    const savedWords = JSON.parse(localStorage.getItem("stringifiedWords"));
    if (savedWords.length === 0) {
      return 0;
    } else {
      return savedWords[savedWords.length - 1]._id + 1;
    }
  }

  function saveWord(word) {
    const savedWords = JSON.parse(localStorage.getItem("stringifiedWords"));
    const wordToSave = getWordInfo(word);
    wordToSave._id = generateID();
    setLocalSavedWords([...savedWords, wordToSave]);
    setActiveWord("");
    setShowPopup(false);
  }

  // async function updateMeaning(word, formData) {
  //   const updatedWord = await wordsAPI.updateMeaning(word, formData);
  //   setSavedWords((prevSavedWords) =>
  //     prevSavedWords.map((savedWord) =>
  //       savedWord._id === updatedWord._id ? updatedWord : savedWord
  //     )
  //   );
  // }

  /* FUNCTION ALTERED to allow for users to have meaning, term, and reading updated after form submission. */
  function updateWord(word, inputtedMeaning, inputtedTerm, inputtedReading) {
    const savedWords = JSON.parse(localStorage.getItem("stringifiedWords"));
    for (let k in savedWords) {
      if (savedWords[k]._id === word._id) {
        savedWords[k].meaning = inputtedMeaning;
        savedWords[k].charGroup = inputtedTerm;
        savedWords[k].pinyin = inputtedReading;
      }
    }
    setLocalSavedWords([...savedWords]);
  }

  // async function deleteWord(word) {
  //   setSavedWords((prevSavedWords) =>
  //     prevSavedWords.filter((savedWord) => savedWord._id !== word._id)
  //   );
  //   try {
  //     await wordsAPI.deleteWord(word);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  function deleteWord(word) {
    const savedWords = JSON.parse(localStorage.getItem("stringifiedWords"));
    const filteredWords = savedWords.filter((item) => item._id !== word._id);
    setLocalSavedWords([...filteredWords]);
  }

  function handleClose() {
    setFlashcards([]);
    setCorrectCount(0);
    setGameInProgress(false);
    setOpen(false);
  }

  function handleCorrect() {
    // if the user marks the word correct, create a new array of flashcards removing the 1st one in the array (the one that was correct)
    setFlashcards((prevFlashcards) => prevFlashcards.slice(1));
    setCorrectCount(correctCount + 1);
    setRemainingCount(remainingCount - 1);
  }

  function handleIncorrect() {
    // if the user marks the word incorrect, create a new array by removing the 1st card (same as when you get it correct), but instead add it back in at the end of the new array (basically cycles the cards thru)
    setFlashcards((prevFlashcards) => [
      ...prevFlashcards.slice(1),
      prevFlashcards[0],
    ]);
  }

  function startQuiz() {
    setOpen(true);
    getFlashcards();
    setRemainingCount(flashcards.length);
    console.log(flashcards.length);
    setGameInProgress(true);
  }

  function handlePlayAgain() {
    const flashcardsArray = localSavedWords.map((word) => ({
      chinese: word.charGroup,
      pinyin: word.pinyin,
      meaning: word.meaning,
      id: word._id,
    }));
    setFlashcards(flashcardsArray);
    setGameInProgress(false);
    setOpen(true);
  }

  //state that will be used to store data that will determine which sidebar content to present based on which sidebar is clicked.
  const [sidebarCategory, setSidebarCategory] = useState(null);

  //this function will change the type of content that should be displayed on the sidebar whenever one of the nav buttons is clicked
  function changeSidebarCategory(selectedIcon) {
    if (sidebarCategory === selectedIcon) {
      setSidebarCategory(null);
    } else {
      setSidebarCategory(selectedIcon);
    }
  }

  //function that physically expands the sidebar
  function expandSidebar() {
    setExpandedSidebar(!expandedSidebar);
  }

  //function that closes the sidebar when you click on the arrow icon.
  function handleBackArrowClick(e) {
    const toolTipId = e.currentTarget.dataset.tooltipId;
    expandSidebar();
    changeSidebarCategory(toolTipId);
  }

  return !text ? (
    "Loading ..."
  ) : (
    <main
      className={`TextPage page ${
        expandedSidebar ? "expanded-sidebar" : "collapsed-sidebar"
      }`}
    >
      <nav className="side-nav">
        <DemoNav
          expandSidebar={expandSidebar}
          changeSidebarCategory={changeSidebarCategory}
          sidebarCategory={sidebarCategory}
          handleShowExit={handleShowExit}
        />
      </nav>

      {/* Conditional rendering, dependent on the values of expandedSidbar and sidebarCategory, that will determine if the sidebar is displayed and what content is displayed. */}
      {expandedSidebar && (
        <aside className="sidebar">
          {sidebarCategory === "saved" && (
            <DemoSavedWordsList
              activeWord={activeWord}
              setActiveWord={setActiveWord}
              localSavedWords={localSavedWords}
              setLocalSavedWords={setLocalSavedWords}
              deleteWord={deleteWord}
              updateWord={updateWord}
            />
          )}
          {sidebarCategory === "lib" && <DemoLibrary />}
          {sidebarCategory === "info" && (
            <DemoInfoSidebar
              activeWord={activeWord}
              saveWord={saveWord}
              setShowPopup={setShowPopup}
              setActiveWord={setActiveWord}
            />
          )}
          {sidebarCategory === "flash" && (
            <>
              <Button
                onClick={startQuiz}
                variant="contained"
                disabled={gameInProgress}
              >
                Start Quiz
              </Button>
              {gameInProgress && (
                <>
                  <DemoFlashcard
                    flashcard={flashcards[0]}
                    handleCorrect={handleCorrect}
                    handleIncorrect={handleIncorrect}
                    selectedFront={selectedFront}
                    showPinyin={showPinyin}
                  />
                </>
              )}
            </>
          )}
        </aside>
      )}

      <section className="text-section">
        {activeTab === "read" && <DemoReadText text={text} />}
        {activeTab === "study" && <DemoStudyText text={text} />}
        {activeTab === "translate" && <DemoTranslateText text={text} />}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <DemoFlashcardForm
              selectedFront={selectedFront}
              setSelectedFront={setSelectedFront}
              showPinyin={showPinyin}
              setShowPinyin={setShowPinyin}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <DemoExitModal
          showExitModal={showExitModal}
          handleCloseExit={handleCloseExit}
        />
      </section>
    </main>
  );
}
