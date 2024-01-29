import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './TextPage.css'
import StudyText from '../../components/StudyText/StudyText'
import ReadText from '../../components/ReadText/ReadText'
import TranslateText from '../../components/TranslateText/TranslateText'
import SavedWordsList from '../../components/SavedWordsList/SavedWordsList'
import * as textsAPI from '../../utilities/texts-api'

export default function TextPage() {

  const { id } = useParams()
  const [text, setText] = useState(null)
  const [tokenizedText, setTokenizedText] = useState([])
  const [savedWords, setSavedWords] = useState([])
  const [isEditMode, setIsEditMode] = useState(false)
  const [activeWord, setActiveWord] = useState(null)
  const [activeTab, setActiveTab] = useState('study')

  const [showPopup, setShowPopup] = useState(false)

  useEffect(function() {
    async function getText() {
      const text = await textsAPI.getText(id)
      setText(text)
    }
    getText()
  }, [id])

  useEffect(function() {
    async function getTokenizedText() {
      if (text) {
        const tokenizedText = await textsAPI.tokenizeText(text.content)
        setTokenizedText(tokenizedText)
      }
    }
    getTokenizedText()
  }, [text])

  useEffect(function() {
    async function getSavedWords() {
      const savedWords = await textsAPI.getSavedWords(id)
      setSavedWords(savedWords)
    }
    getSavedWords()
  },[])

  function handleTabClick(tabName) {
    setActiveTab(tabName)
  }

  async function saveWord(word, textId) {
    const savedWord = await textsAPI.saveWord(word, textId)
    setSavedWords([...savedWords, savedWord])
    setActiveWord('')
    setShowPopup(false)
  }

  function updateMeaning(word) {
    alert(word._id)
    // const updatedWord = await textsAPI.updateWord(word, textId)
  }

  function toggleEditMode() {
    setIsEditMode(!isEditMode)
  }

  return (
    <main className="TextPage page">

      <aside className="sidebar">
        <SavedWordsList savedWords={savedWords} toggleEditMode={toggleEditMode} isEditMode={isEditMode} updateMeaning={updateMeaning}/>
      </aside>

      <section className="main-area">

        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'study' ? 'active' : ''}`} onClick={() => handleTabClick('study')} >Study</button>
          <button className={`tab-btn ${activeTab === 'read' ? 'active' : ''}`} onClick={() => handleTabClick('read')} >Read</button>
          <button className={`tab-btn ${activeTab === 'translate' ? 'active' : ''}`} onClick={() => handleTabClick('translate')} >Translate</button>
        </div>

          <div className="text-area">

            <div id="study" className={`study-container ${activeTab === 'study' ? 'active' : ''}`}>
              <div className="Text">
                {text ? <StudyText 
                  text={text}
                  tokenizedText={tokenizedText} 
                  textId={id} 
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