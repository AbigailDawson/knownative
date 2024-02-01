import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './TextPage.css'
import StudyText from '../../components/StudyText/StudyText'
import ReadText from '../../components/ReadText/ReadText'
import TranslateText from '../../components/TranslateText/TranslateText'
import SavedWordsList from '../../components/SavedWordsList/SavedWordsList'
import Flashcard from '../../components/Flashcard/Flashcard'
import FlashcardForm from '../../components/FlashcardForm/FlashcardForm'
import * as textsAPI from '../../utilities/texts-api'
import * as wordsAPI from '../../utilities/words-api'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { FaRegWindowClose } from "react-icons/fa";
import { PiStarLight } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";

export default function TextPage({ getText, updateText }) {

  const { textId } = useParams()
  const text = getText(textId)

  const [tokenizedText, setTokenizedText] = useState([])
  const [activeTab, setActiveTab] = useState('read')

  // --- SAVED WORDS ---
  const [savedWords, setSavedWords] = useState([])
  const [activeWord, setActiveWord] = useState(null)

  // --- POPUP ---
  const [showPopup, setShowPopup] = useState(false)

  // --- FLASHCARDS ---
  const [open, setOpen] = useState(false)
  const [flashcards, setFlashcards] = useState([])
  const [selectedFront, setSelectedFront] = useState('chinese')
  const [showPinyin, setShowPinyin] = useState(true)
  const [gameInProgress, setGameInProgress] = useState(false)

  useEffect(function() {
    async function getTokenizedText() {
      if (text) {
        const tokenizedText = await textsAPI.tokenizeText(text.content)
        setTokenizedText(tokenizedText)
      }
    }
    getTokenizedText()
  }, [])

  useEffect(function() {
    async function getSavedWords() {
      const savedWords = await textsAPI.getSavedWords(textId)
      setSavedWords(savedWords)
    }
    getSavedWords()
  },[])

  useEffect(function() {
    const flashcardsArray = savedWords.map((word) => ({
      chinese: word.traditional,
      pinyin: word.pinyin,
      meaning: word.meaning,
      id: word._id,
    }))
    setFlashcards(flashcardsArray)
  }, [savedWords])

  function handleTabClick(tabName) {
    setActiveTab(tabName)
  }

  async function favoriteText(text, textId) {
    const updatedText = await textsAPI.favoriteText(text, textId)
    updateText(updatedText)
  }

  async function saveWord(word, textId) {
    const savedWord = await textsAPI.saveWord(word, textId)
    setSavedWords([...savedWords, savedWord])
    setActiveWord('')
    setShowPopup(false)
  }

  async function updateMeaning(word, formData) {
    const updatedWord = await wordsAPI.updateMeaning(word, formData)
    setSavedWords(prevSavedWords => 
      prevSavedWords.map(savedWord =>
        savedWord._id === updatedWord._id ? updatedWord : savedWord))
  }

  async function deleteWord(word) {
    setSavedWords(prevSavedWords => 
      prevSavedWords.filter(savedWord => savedWord._id !== word._id))
      try {
        await wordsAPI.deleteWord(word)
      } catch (error) {
        console.error(error)
      }
  }

  function handleOpen() {
    setOpen(true)
    setGameInProgress(false)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleCorrect() {
    // if the user marks the word correct, create a new array of flashcards removing the 1st one in the array (the one that was correct)
    setFlashcards((prevFlashcards) => prevFlashcards.slice(1))
  }

  function handleIncorrect() {
    // if the user marks the word incorrect, create a new array by removing the 1st card (same as when you get it correct), but instead add it back in at the end of the new array (basically cycles the cards thru)
    setFlashcards((prevFlashcards) => [...prevFlashcards.slice(1), prevFlashcards[0]])
  }

  function handlePlay() {
    setGameInProgress(true)
  }

  function handlePlayAgain() {
    const flashcardsArray = savedWords.map((word) => ({
      chinese: word.traditional,
      pinyin: word.pinyin,
      meaning: word.meaning,
      id: word._id,
    }))
    setFlashcards(flashcardsArray)
    setGameInProgress(false)
    setOpen(true)
  }

  return !text ? 'Loading ...' 
    : (
    
    <main className="TextPage page">
      
      <aside className="sidebar">
        <SavedWordsList 
          savedWords={savedWords} 
          updateMeaning={updateMeaning}
          deleteWord={deleteWord}
          handleOpen={handleOpen}
        />
      </aside>

      <Dialog
          open={open}
          onClose={handleClose}   
          PaperComponent={({ children }) => (
            <div style={{ 
              width: '60vmin', 
              height: '50vmin',
              backgroundColor: 'white',
              color: 'var(--drk-txt)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1vmin',
              borderRadius: '2vmin'
              }}>
              {children}
            </div>
          )}
        >
        <DialogActions style={{ 
          alignSelf: 'flex-end',
          padding: '0'
          }}>
          <Button
          onClick={handleClose}>
            <FaRegWindowClose className="close-icon"/>
          </Button>
        </DialogActions>
        <DialogContent
          style={{ 
            width: '60%',
            }}
          >
            { flashcards.length > 0 ? (
              <>
              { gameInProgress ? (
                <Flashcard 
                chinese={flashcards[0].chinese}
                pinyin={flashcards[0].pinyin}
                english={flashcards[0].meaning}
                selectedFront={selectedFront}
                showPinyin={showPinyin}
                onCorrect={handleCorrect}
                onIncorrect={handleIncorrect}
              />
              ) : (
                <FlashcardForm 
                  selectedFront={selectedFront}
                  setSelectedFront={setSelectedFront}
                  showPinyin={showPinyin}
                  setShowPinyin={setShowPinyin}
                  handlePlay={handlePlay}
                />
              )}
              </>
              
            ) : (
              <>
                'Congratulations, you completed the deck!'
                <button onClick={handlePlayAgain}>Play Again</button>
              </>
            ) }
        </DialogContent>
      </Dialog>

      <section className="main-area">

        <div className="top-area">
          <div className='textpage-heading'>
            <div className="flex-row">
              <h1 className='textpage-heading-title zh'>{text.title}</h1>
              { !text.favorite && !text.archived && <PiStarLight className="star-empty" onClick={() => favoriteText(text, text._id)}/> }
              { text.favorite && <PiStarFill className="star-filled" onClick={() => favoriteText(text, text._id)} /> }
            </div>
            <a className='textpage-heading-subtitle' href={text.source}>Original source</a>          
          </div>
        </div>
        

        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'read' ? 'active' : ''}`} onClick={() => handleTabClick('read')} >Read</button>
          <button className={`tab-btn ${activeTab === 'study' ? 'active' : ''}`} onClick={() => handleTabClick('study')} >Study</button>
          <button className={`tab-btn ${activeTab === 'translate' ? 'active' : ''}`} onClick={() => handleTabClick('translate')} >Translate</button>
        </div>

          <div className="text-area">

            <div id="study" className={`study-container ${activeTab === 'study' ? 'active' : ''}`}>
              <div className="Text">
                {text ? <StudyText 
                  text={text}
                  tokenizedText={tokenizedText} 
                  textId={textId} 
                  activeWord={activeWord}
                  setActiveWord={setActiveWord}
                  saveWord={saveWord} 
                  savedWords={savedWords} 
                  setSavedWords={setSavedWords} 
                  showPopup={showPopup}
                  setShowPopup={setShowPopup}
                  /> : 'Loading text'}
              </div>
            </div>

            <div id="read" className={`read-container ${activeTab === 'read' ? 'active' : ''}`}>
              <div className="Text">
                {text ? <ReadText text={text} /> : 'Loading text'}
              </div>
            </div>

            <div id="translate" className={`translate-container ${activeTab === 'translate' ? 'active' : ''}`}>
              <div className="Text">
                {text ? <TranslateText text={text} /> : 'Loading text'}
              </div>
            </div> 


          </div>

      </section>

          

    </main>
  )
}