import { useState, useEffect } from "react";
import "./DemoTextPage.css";
import DemoStudyText from "../../demo-components/DemoStudyText/DemoStudyText";
import DemoReadText from "../../demo-components/DemoReadText/DemoReadText";
import DemoTranslateText from "../../demo-components/DemoTranslateText/DemoTranslateText";
import DemoSavedWordsList from "../../demo-components/DemoSavedWordsList/DemoSavedWordsList";
import DemoFlashcard from "../../demo-components/DemoFlashcard/DemoFlashcard";
import DemoFlashcardForm from "../../demo-components/DemoFlashcardForm/DemoFlashcardForm";
import DemoInfoSidebar from "../../demo-components/DemoInfoSidebar/DemoInfoSidebar";
import DemoNav from "../../demo-components/DemoNav/DemoNav";
import DemoExitModal from "../../demo-components/DemoExitModal/DemoExitModal";
// import * as textsAPI from "../../../utilities/texts-api";
// import * as wordsAPI from "../../../utilities/words-api";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { FaRegWindowClose } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { PiRepeatBold } from "react-icons/pi";
import { getWordInfo } from "../../../utilities/words-service";

//import word from '../../../../models/word'

export default function DemoTextPage({ getText, updateText }) {
  const text = {
    _id: "1",
    title: "10 個台灣人最愛去的日本城市！",
    content:
      "位在日本本州中部的靜岡縣，鄰近神奈川縣，有著日本最高、最著名的世界遺產「富士山」，大家最喜歡去的景點之一「伊豆半島」更是連日本人都非常熱愛的度假勝地，還有熱海沙灘、夢幻景點大井川鐵路等。靜岡縣南部緊鄰太平洋，眺望廣闊綿延的海岸線，十分悠閒，如果喜愛休閒輕鬆的旅程，它會是你的好選擇！此外，去過靜岡縣「伊豆仙人掌動物園」的網友表示，「可以很親近不同的小動物，隻隻都會賣萌賺零食。水豚非常親人，袋鼠十分慵懶，看他們浸溫泉，可以看足一小時」、「水豚太可愛了，樂園小小的但規劃的很不錯，可以逛完大室山後來走走」，也推薦列入行程中喔。",
    source:
      "https://www.housefeel.com.tw/article/%E6%97%A5%E6%9C%AC%E6%97%85%E9%81%8A-%E6%97%A5%E6%9C%AC%E6%99%AF%E9%BB%9E-%E6%97%A5%E6%9C%AC%E8%A7%80%E5%85%89-%E6%97%A5%E6%9C%AC%E5%9F%8E%E5%B8%82/",
    favorite: false,
    archived: false,
    easierText: "",
  };

  const [activeTab, setActiveTab] = useState("read");

  // --- SAVED WORDS ---
  const [localSavedWords, setLocalSavedWords] = useState(
    JSON.parse(localStorage.getItem("stringifiedWords") === null)
      ? []
      : JSON.parse(localStorage.getItem("stringifiedWords"))
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
  //   const savedWord = await textsAPI.saveWord(word, textId)
  //   setSavedWords([...savedWords, savedWord])
  //   setActiveWord('')
  //   setShowPopup(false)
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
  //   const updatedWord = await wordsAPI.updateMeaning(word, formData)
  //   setSavedWords(prevSavedWords =>
  //     prevSavedWords.map(savedWord =>
  //       savedWord._id === updatedWord._id ? updatedWord : savedWord))
  // }

  /* FUNCTION ALTERED to allow for users to have meaning, term, and reading updated after form submissio.*/
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
  //   setSavedWords(prevSavedWords =>
  //     prevSavedWords.filter(savedWord => savedWord._id !== word._id))
  //     try {
  //       await wordsAPI.deleteWord(word)
  //     } catch (error) {
  //       console.error(error)
  //     }
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
    console.log(flashcards.length)
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
      className={`TextPage page ${expandedSidebar ? "expanded-sidebar" : "collapsed-sidebar"
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
          {sidebarCategory === "savedwords-tooltip" && (
            <DemoSavedWordsList
              savedWords={localSavedWords}
              updateWord={updateWord}
              deleteWord={deleteWord}
              startQuiz={startQuiz}
              gameInProgress={gameInProgress}
              handleBackArrowClick={handleBackArrowClick}
            />
          )}
          {sidebarCategory === "flashcards-tooltip" && (
            <DemoFlashcardForm
              expandSidebar={expandSidebar}
              changeSidebarCategory={changeSidebarCategory}
              selectedFront={selectedFront}
              setSelectedFront={setSelectedFront}
              showPinyin={showPinyin}
              setShowPinyin={setShowPinyin}
              startQuiz={startQuiz}
              handleBackArrowClick={handleBackArrowClick}
            />
          )}
          {sidebarCategory === "info-tooltip" && (
            <DemoInfoSidebar
              changeSidebarCategory={changeSidebarCategory}
              handleBackArrowClick={handleBackArrowClick}
              handleShowExit={handleShowExit}
            />
          )}
        </aside>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={({ children }) => (
          <div
            style={{
              width: "60vmin",
              height: "50vmin",
              backgroundColor: "white",
              color: "var(--drk-txt)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1vmin",
              borderRadius: "2vmin",
            }}
          >
            {children}
          </div>
        )}
      >
        <DialogActions
          style={{
            alignSelf: "flex-end",
            padding: "0",
          }}
        >
          <Button onClick={handleClose}>
            <FaRegWindowClose className="close-icon" />
          </Button>
        </DialogActions>
        <DialogContent
          style={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {flashcards.length > 0 && gameInProgress ? (
                <>
                  <DemoFlashcard
                    chinese={flashcards[0].chinese}
                    pinyin={flashcards[0].pinyin}
                    english={flashcards[0].meaning}
                    selectedFront={selectedFront}
                    showPinyin={showPinyin}
                    onCorrect={handleCorrect}
                    onIncorrect={handleIncorrect}
                    flashcards={flashcards}
                  />
                  <div>
                  <div className="flashcard-btns">
                    <button className="correct-btn" onClick={handleCorrect}>
                      <GiCheckMark className="flashcard-icon" />
                      Correct!
                    </button>
                    <button
                      className="incorrect-btn"
                      onClick={handleIncorrect}
                    >
                      <PiRepeatBold className="flashcard-icon" />
                      Try again
                    </button>
                  </div>
                  <div className="flashcard-count">
                    <p>
                      <span className="correct-count">{correctCount}</span>{" "}
                      Correct
                    </p>
                    <p>
                      <span className="remaining-count">
                        {remainingCount}
                      </span>{" "}
                      Remaining
                    </p>
                  </div>
                </div>
              </>
          ) : (
            <div className="congrats">
              <div>
                <dotlottie-player
                  src="https://lottie.host/9279b8f8-2d84-4077-aaf6-db967f8ec7bb/3JRYmBPJgq.json"
                  background="transparent"
                  speed="1"
                  style={{ height: "20vmin" }}
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
              <h2>You completed the deck!</h2>
              <button className="play-btn" onClick={handlePlayAgain}>
                Play Again
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section className="main-area">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "read" ? "active" : ""}`}
            onClick={() => handleTabClick("read")}
          >
            Read
          </button>
          <button
            className={`tab-btn ${activeTab === "study" ? "active" : ""}`}
            onClick={() => handleTabClick("study")}
          >
            Study
          </button>
          <button
            className={`tab-btn ${activeTab === "translate" ? "active" : ""}`}
            onClick={() => handleTabClick("translate")}
          >
            Translate
          </button>
        </div>

        <div className="text-area">
          <div className="textpage-heading">
            <div className="flex-row">
              <h1 className="textpage-heading-title zh">{text.title}</h1>
            </div>
          </div>

          <div
            id="study"
            className={`study-container ${activeTab === "study" ? "active" : ""
              }`}
          >
            <div className="Text study-content">
              {text ? (
                <DemoStudyText
                  text={text}
                  textId={text._id}
                  activeWord={activeWord}
                  setActiveWord={setActiveWord}
                  saveWord={saveWord}
                  savedWords={localSavedWords}
                  showPopup={showPopup}
                  setShowPopup={setShowPopup}
                />
              ) : (
                "Loading text"
              )}
            </div>
          </div>

          <div
            id="read"
            className={`read-container ${activeTab === "read" ? "active" : ""}`}
          >
            <div className="Text">
              {text ? <DemoReadText text={text} /> : "Loading text"}
            </div>
          </div>

          <div
            id="translate"
            className={`translate-container ${activeTab === "translate" ? "active" : ""
              }`}
          >
            <div className="Text">
              {text ? <DemoTranslateText text={text} /> : "Loading text"}
            </div>
          </div>
        </div>
      </section>
      <div id="exit-modal">
        {
          <DemoExitModal
            showExitModal={showExitModal}
            handleCloseExit={handleCloseExit}
          />
        }
      </div>
    </main>
  );
}
