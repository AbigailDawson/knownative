import { useState, useEffect, useRef } from "react";
import "./DemoTextPage.css";
import DemoStudyText from "../../demo-components/DemoStudyText/DemoStudyText";
import DemoReadText from "../../demo-components/DemoReadText/DemoReadText";
import DemoTranslateText from "../../demo-components/DemoTranslateText/DemoTranslateText";
import DemoSavedWordsList from "../../demo-components/DemoSavedWordsList/DemoSavedWordsList";
import DemoFlashcardForm from "../../demo-components/DemoFlashcardForm/DemoFlashcardForm";
import DemoInfoSidebar from "../../demo-components/DemoInfoSidebar/DemoInfoSidebar";
import DemoNav from "../../demo-components/DemoNav/DemoNav";
import DemoWelcomeModal from "../../demo-components/DemoWelcomeModal/DemoWelcomeModal";
import DemoExitModal from "../../demo-components/DemoExitModal/DemoExitModal";
// import * as textsAPI from "../../../utilities/texts-api";
// import * as wordsAPI from "../../../utilities/words-api";
import { getWordInfo } from "../../../utilities/words-service";
import DemoLibrary from "../../demo-components/DemoLibrary/DemoLibrary";
//import word from '../../../../models/word'
import DemoDifficultyTag from "../../demo-components/DemoDifficultyTag/DemoDifficultyTag";

export default function DemoTextPage({ getText, updateText }) {
  const text = {
    _id: "1",
    title: "10 個台灣人最愛去的日本城市！",
    content:
      "位在日本本州中部的靜岡縣，鄰近神奈川縣，有著日本最高、最著名的世界遺產「富士山」，大家最喜歡去的景點之一「伊豆半島」更是連日本人都非常熱愛的度假勝地，還有熱海沙灘、夢幻景點大井川鐵路等。靜岡縣南部緊鄰太平洋，眺望廣闊綿延的海岸線，十分悠閒，如果喜愛休閒輕鬆的旅程，它會是你的好選擇！此外，去過靜岡縣「伊豆仙人掌動物園」的網友表示，「可以很親近不同的小動物，隻隻都會賣萌賺零食。水豚非常親人，袋鼠十分慵懶，看他們浸溫泉，可以看足一小時」、「水豚太可愛了，樂園小小的但規劃的很不錯，可以逛完大室山後來走走」，也推薦列入行程中喔。位在日本本州中部的靜岡縣，鄰近神奈川縣，有著日本最高、最著名的世界遺產「富士山」，大家最喜歡去的景點之一「伊豆半島」更是連日本人都非常熱愛的度假勝地，還有熱海沙灘、夢幻景點大井川鐵路等。靜岡縣南部緊鄰太平洋，眺望廣闊綿延的海岸線，十分悠閒，如果喜愛休閒輕鬆的旅程，它會是你的好選擇！此外，去過靜岡縣「伊豆仙人掌動物園」的網友表示，「可以很親近不同的小動物，隻隻都會賣萌賺零食。水豚非常親人，袋鼠十分慵懶，看他們浸溫泉，可以看足一小時」、「水豚太可愛了，樂園小小的但規劃的很不錯，可以逛完大室山後來走走」，也推薦列入行程中喔。位在日本本州中部的靜岡縣，鄰近神奈川縣，有著日本最高、最著名的世界遺產「富士山」，大家最喜歡去的景點之一「伊豆半島」更是連日本人都非常熱愛的度假勝地，還有熱海沙灘、夢幻景點大井川鐵路等。靜岡縣南部緊鄰太平洋，眺望廣闊綿延的海岸線，十分悠閒，如果喜愛休閒輕鬆的旅程，它會是你的好選擇！此外，去過靜岡縣「伊豆仙人掌動物園」的網友表示，「可以很親近不同的小動物，隻隻都會賣萌賺零食。水豚非常親人，袋鼠十分慵懶，看他們浸溫泉，可以看足一小時」、「水豚太可愛了，樂園小小的但規劃的很不錯，可以逛完大室山後來走走」，也推薦列入行程中喔。",
    source:
      "https://www.housefeel.com.tw/article/%E6%97%A5%E6%9C%AC%E6%97%85%E9%81%8A-%E6%97%A5%E6%9C%AC%E6%99%AF%E9%BB%9E-%E6%97%A5%E6%9C%AC%E8%A7%80%E5%85%89-%E6%97%A5%E6%9C%AC%E5%9F%8E%E5%B8%82/",
    favorite: false,
    archived: false,
    easierText: "",
  };

  const [activeTab, setActiveTab] = useState("read");
  //-- TEXT DIFFICULTY --
  const [textSelection, setTextSelection] = useState("beginner");

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

  // --- WELCOME MODAL ---
  const [isDemoWelcomeModalOpen, setDemoWelcomeModalOpen] = useState(true);
  const [demoWelcomeModalData, setDemoWelcomeModalData] = useState(null);
  const [welcomeModalComplete, setWelcomeModalComplete] = useState(
    (localStorage.getItem("welcomeModalComplete")  === null) ? false : JSON.parse(localStorage.getItem("welcomeModalComplete"))
  )

  const handleCloseDemoWelcomeModal = () => {
    setWelcomeModalComplete(true)
    setDemoWelcomeModalOpen(false)
    localStorage.setItem("welcomeModalComplete", 'true')
  }

  const handleWelcomeModalSubmit = (data) => {
    setDemoWelcomeModalData(data);
    handleCloseDemoWelcomeModal();
  };

  const topRef = useRef(null);
  const blurRef = useRef(null);

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

  function handleTabClick(tabName) {
    topRef.current?.scroll(0, 0);
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

  /* FUNCTION ALTERED to allow for users to have meaning, term, and reading updated after form submission.*/
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

  const blurText = (isActive) => {
    if (isActive) {
      blurRef.current.style.filter = "blur(4px)";
    } else {
      blurRef.current.removeAttribute("style");
    }
  };

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
          savedWords={localSavedWords}
          handleShowExit={handleShowExit}
        />
      </nav>

      {/* Conditional rendering, dependent on the values of expandedSidbar and sidebarCategory, that will determine if the sidebar is displayed and what content is displayed. */}

      <aside className="sidebar">
        {sidebarCategory === "savedwords-tooltip" && (
          <DemoSavedWordsList
            savedWords={localSavedWords}
            updateWord={updateWord}
            deleteWord={deleteWord}
            handleBackArrowClick={handleBackArrowClick}
          />
        )}
        {sidebarCategory === "flashcards-tooltip" && (
          <DemoFlashcardForm
            expandSidebar={expandSidebar}
            changeSidebarCategory={changeSidebarCategory}
            localSavedWords={localSavedWords}
            handleBackArrowClick={handleBackArrowClick}
            blurText={blurText}
          />
        )}
        {sidebarCategory === "info-tooltip" && (
          <DemoInfoSidebar
            changeSidebarCategory={changeSidebarCategory}
            handleBackArrowClick={handleBackArrowClick}
          />
        )}
        {sidebarCategory === "library-tooltip" && (
          <DemoLibrary
            handleBackArrowClick={handleBackArrowClick}
            textSelection={textSelection}
            setTextSelection={setTextSelection}
          />
        )}
      </aside>


      <section className="main-area" ref={topRef}>
        <div className="tabs sticky-fade">
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

        <div className="text-area" ref={blurRef}>
          <div className="textpage-heading">
            <div className="flex-row">
              <h1 className="textpage-heading-title zh">{text.title}</h1>
              <article className="textpage-difficulty-tag">
                <DemoDifficultyTag textSelection={textSelection} />
              </article>
            </div>
          </div>

          <div
            id="study"
            className={`study-container ${
              activeTab === "study" ? "active" : ""
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
            className={`translate-container ${
              activeTab === "translate" ? "active" : ""
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

      {welcomeModalComplete ? ""
        : (<DemoWelcomeModal
            isOpen={isDemoWelcomeModalOpen}
            onSubmit={handleWelcomeModalSubmit}
            onClose={handleCloseDemoWelcomeModal}
            textSelection={textSelection}
            setTextSelection={setTextSelection}
          />)
      }
      
    </main>
  );
}
