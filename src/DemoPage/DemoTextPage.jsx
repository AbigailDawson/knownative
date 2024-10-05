import { useState, useEffect, useRef } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import './DemoTextPage.css';

import DemoStudyText from './DemoMainContent/DemoStudyText/DemoStudyText';
import DemoReadText from './DemoMainContent/DemoReadText/DemoReadText';
import DemoTranslateText from './DemoMainContent/DemoTranslateText/DemoTranslateText';

import DemoLeftNav from './DemoLeftNav/DemoLeftNav';
import DemoSavedWordsList from './DemoLeftNav/components/DemoSavedWordsList/DemoSavedWordsList';
import DemoFlashcardForm from './DemoLeftNav/components/DemoFlashcardForm/DemoFlashcardForm';
import DemoInfoSidebar from './DemoLeftNav/components/DemoInfoSidebar/DemoInfoSidebar';
import DemoLibrary from './DemoLeftNav/components/DemoLibrary/DemoLibrary';

import DemoWelcomeModal from './components/DemoWelcomeModal/DemoWelcomeModal';
import DemoExitModal from './components/DemoExitModal/DemoExitModal';
// import * as textsAPI from "../../../utilities/texts-api";
// import * as wordsAPI from "../../../utilities/words-api";
import { getWordInfo } from '../utilities/words-service';
//import word from '../../../../models/word'
import DemoDifficultyTag from './components/DemoDifficultyTag/DemoDifficultyTag';
import demoTexts from './demodata';

export default function DemoTextPage() {
  // --- DISPLAY STATE VALUES ---
  const [activeTab, setActiveTab] = useState('read');
  const [sidebarCategory, setSidebarCategory] = useState(null);
  const [expandedSidebar, setExpandedSidebar] = useState(false);

  //-- TEXT DIFFICULTY STATE VALUES--
  const [textSelection, setTextSelection] = useState(
    localStorage.getItem('textSelection') === null
      ? 'beginner'
      : localStorage.getItem('textSelection')
  );
  const [text, setText] = useState(
    localStorage.getItem('text') === null
      ? demoTexts.beginner
      : JSON.parse(localStorage.getItem('text'))
  );

  // --- SAVED WORDS ---
  const [localSavedWords, setLocalSavedWords] = useState(
    JSON.parse(localStorage.getItem('stringifiedWords') === null)
      ? []
      : JSON.parse(localStorage.getItem('stringifiedWords'))
  );
  // const [savedWords, setSavedWords] = useState([]);

  // --- STUDY TAB STATE ---
  const [activeWord, setActiveWord] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // --- EXIT MODAL ---
  const [showExitModal, setShowExitModal] = useState(false);
  const handleShowExit = () => setShowExitModal(true);

  // --- WELCOME MODAL ---
  const [isDemoWelcomeModalOpen, setDemoWelcomeModalOpen] = useState(true);
  //const [demoWelcomeModalData, setDemoWelcomeModalData] = useState(null);
  const [welcomeModalComplete, setWelcomeModalComplete] = useState(
    localStorage.getItem('welcomeModalComplete') === null
      ? false
      : JSON.parse(localStorage.getItem('welcomeModalComplete'))
  );

  const handleCloseDemoWelcomeModal = () => {
    setWelcomeModalComplete(true);
    setDemoWelcomeModalOpen(false);
    localStorage.setItem('welcomeModalComplete', 'true');
  };

  const handleWelcomeModalSubmit = () => {
    //setDemoWelcomeModalData(data);
    handleCloseDemoWelcomeModal();
  };

  // --- REFS ---
  const topRef = useRef(null);
  const blurRef = useRef(null);

  // --- Text Selection Side Effects---
  useEffect(() => {
    setText(demoTexts[textSelection]);
    localStorage.setItem('text', JSON.stringify(demoTexts[textSelection]));

    localStorage.setItem('textSelection', textSelection);
  }, [textSelection]);

  useEffect(
    function () {
      function setLocalStorage() {
        localStorage.setItem('stringifiedWords', JSON.stringify(localSavedWords));
      }
      setLocalStorage();
    },
    [localSavedWords]
  );

  // --- SAVED WORDS RELATED FUNCTIONS ---
  function generateID() {
    const savedWords = JSON.parse(localStorage.getItem('stringifiedWords'));
    if (savedWords.length === 0) {
      return 0;
    } else {
      return savedWords[savedWords.length - 1]._id + 1;
    }
  }

  function saveWord(word) {
    const savedWords = JSON.parse(localStorage.getItem('stringifiedWords'));
    const wordToSave = getWordInfo(word);
    wordToSave._id = generateID();
    setLocalSavedWords([...savedWords, wordToSave]);
    setActiveWord('');
    setShowPopup(false);
  }

  function deleteWord(word) {
    const savedWords = JSON.parse(localStorage.getItem('stringifiedWords'));
    const filteredWords = savedWords.filter((item) => item._id !== word._id);
    setLocalSavedWords([...filteredWords]);
  }

  /* FUNCTION ALTERED to allow for users to have meaning, term, and reading updated after form submission.*/
  function updateWord(word, inputtedMeaning, inputtedTerm, inputtedReading) {
    const savedWords = JSON.parse(localStorage.getItem('stringifiedWords'));
    for (let k in savedWords) {
      if (savedWords[k]._id === word._id) {
        savedWords[k].meaning = inputtedMeaning;
        savedWords[k].charGroup = inputtedTerm;
        savedWords[k].pinyin = inputtedReading;
      }
    }
    setLocalSavedWords([...savedWords]);
  }

  // --- DISPLAY RELATED FUNCTIONS ---
  function handleTabClick(tabName) {
    topRef.current?.scroll(0, 0);
    setActiveTab(tabName);
  }

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

  // blurs background text when flashcard game in progress
  const blurText = (isActive) => {
    if (isActive) {
      blurRef.current.style.filter = 'blur(4px)';
    } else {
      blurRef.current.removeAttribute('style');
    }
  };

  return !text ? (
    'Loading ...'
  ) : (
    <main className={`TextPage page ${expandedSidebar ? 'expanded-sidebar' : 'collapsed-sidebar'}`}>
      <nav className="side-nav">
        <DemoLeftNav
          expandSidebar={expandSidebar}
          changeSidebarCategory={changeSidebarCategory}
          sidebarCategory={sidebarCategory}
          savedWords={localSavedWords}
          handleShowExit={handleShowExit}
        />
      </nav>

      {/* Conditional rendering, dependent on the values of expandedSidbar and sidebarCategory, that will determine if the sidebar is displayed and what content is displayed. */}
      {/* Potential Option for refactor and moving sidebar components into either DemoLeftNav or a separate component under DemoLeftNav  */}
      <aside className="sidebar">
        {sidebarCategory === 'savedwords-tooltip' && (
          <DemoSavedWordsList
            savedWords={localSavedWords}
            updateWord={updateWord}
            deleteWord={deleteWord}
            handleBackArrowClick={handleBackArrowClick}
          />
        )}
        {sidebarCategory === 'flashcards-tooltip' && (
          <DemoFlashcardForm
            expandSidebar={expandSidebar}
            changeSidebarCategory={changeSidebarCategory}
            localSavedWords={localSavedWords}
            handleBackArrowClick={handleBackArrowClick}
            blurText={blurText}
          />
        )}
        {sidebarCategory === 'info-tooltip' && (
          <DemoInfoSidebar
            changeSidebarCategory={changeSidebarCategory}
            handleBackArrowClick={handleBackArrowClick}
          />
        )}
        {sidebarCategory === 'library-tooltip' && (
          <DemoLibrary
            handleBackArrowClick={handleBackArrowClick}
            textSelection={textSelection}
            setTextSelection={setTextSelection}
            setLocalSavedWords={setLocalSavedWords}
            demoTexts={demoTexts}
          />
        )}
      </aside>

      <section className="main-area" ref={topRef}>
        {/* Potential to be separate component: ArticleHeader */}
        <div className="tabs sticky-fade">
          <button
            className={`tab-btn ${activeTab === 'read' ? 'active' : ''}`}
            onClick={() => handleTabClick('read')}>
            Read
          </button>
          <button
            className={`tab-btn ${activeTab === 'study' ? 'active' : ''}`}
            onClick={() => handleTabClick('study')}>
            Study
          </button>
          <button
            className={`tab-btn ${activeTab === 'translate' ? 'active' : ''}`}
            onClick={() => handleTabClick('translate')}>
            Translate
          </button>
        </div>

        <div className="text-area" ref={blurRef}>
          <div className="textpage-heading">
            <div className="flex-row">
              <h1 className="textpage-heading-title zh">{text.title}</h1>
              <article className="textpage-difficulty-tag">
                <DemoDifficultyTag textSelection={textSelection} />
                <a href={text.source} className="link-view-source" target="_blank" rel="noreferrer">
                  View Source <BiLinkExternal />
                </a>
              </article>
            </div>
          </div>

          <div id="study" className={`study-container ${activeTab === 'study' ? 'active' : ''}`}>
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
                'Loading text'
              )}
            </div>
          </div>

          <div id="read" className={`read-container ${activeTab === 'read' ? 'active' : ''}`}>
            <div className="Text">{text ? <DemoReadText text={text} /> : 'Loading text'}</div>
          </div>

          <div
            id="translate"
            className={`translate-container ${activeTab === 'translate' ? 'active' : ''}`}>
            <div className="Text">{text ? <DemoTranslateText text={text} /> : 'Loading text'}</div>
          </div>
        </div>
      </section>
      <div id="exit-modal">
        {showExitModal ? <DemoExitModal setShowModal={setShowExitModal} /> : null}
      </div>

      {welcomeModalComplete ? (
        ''
      ) : (
        <DemoWelcomeModal
          isOpen={isDemoWelcomeModalOpen}
          onSubmit={handleWelcomeModalSubmit}
          onClose={handleCloseDemoWelcomeModal}
          textSelection={textSelection}
          setTextSelection={setTextSelection}
        />
      )}
    </main>
  );
}

//--- OLD CODE ---

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

// async function updateMeaning(word, formData) {
//   const updatedWord = await wordsAPI.updateMeaning(word, formData)
//   setSavedWords(prevSavedWords =>
//     prevSavedWords.map(savedWord =>
//       savedWord._id === updatedWord._id ? updatedWord : savedWord))
// }

// async function deleteWord(word) {
//   setSavedWords(prevSavedWords =>
//     prevSavedWords.filter(savedWord => savedWord._id !== word._id))
//     try {
//       await wordsAPI.deleteWord(word)
//     } catch (error) {
//       console.error(error)
//     }
// }
