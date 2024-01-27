import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './TextPage.css'
import StudyText from '../../components/StudyText/StudyText'
import ReadText from '../../components/ReadText/ReadText'
import SavedWordsList from '../../components/SavedWordsList/SavedWordsList'
import * as textsAPI from '../../utilities/texts-api'

export default function TextPage() {

  const { id } = useParams()
  const [text, setText] = useState(null)
  const [tokenizedText, setTokenizedText] = useState([])
  const [savedWords, setSavedWords] = useState([])
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
  
  return (
    <main className="TextPage">
      <section className="content-container">
        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'read' ? 'active' : ''}`} onClick={() => handleTabClick('read')} >Read</button>
          <button className={`tab-btn ${activeTab === 'study' ? 'active' : ''}`} onClick={() => handleTabClick('study')} >Study</button>
        </div>
        <div id="read" className={`read-container ${activeTab === 'read' ? 'active' : ''}`}>
          <h1>Read-container</h1>
          <div className="Text">
            {text ? <ReadText text={text} /> : 'Loading text'}
          </div>
        </div>
        <div id="study" className={`study-container ${activeTab === 'study' ? 'active' : ''}`}>
          <div className="Text">
            {text ? <StudyText 
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
      </section>
      <aside className="sidebar">
        <SavedWordsList savedWords={savedWords} />
      </aside>
    </main>
  )
}