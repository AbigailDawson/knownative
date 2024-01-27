import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './TextPage.css'
import StudyText from '../../components/StudyText/StudyText'
import ReadText from '../../components/ReadText/ReadText'
import SavedWord from '../../components/SavedWord/SavedWord'
import * as textsAPI from '../../utilities/texts-api'

export default function TextPage() {

  const { id } = useParams()
  const [text, setText] = useState(null)
  const [tokenizedText, setTokenizedText] = useState([])
  const [savedWords, setSavedWords] = useState([])
  const [activeTab, setActiveTab] = useState('study')

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

  useEffect(() => {
    async function getSavedWords() {
      const savedWords = await textsAPI.getSavedWords(id)
      setSavedWords(savedWords)
    }
    getSavedWords()
  }, [savedWords])

  function handleTabClick(tabName) {
    setActiveTab(tabName)
  }
  
  const savedWordItems = savedWords.map((word) => (
    <SavedWord
      key={id}
      word={word}
    />
  ))

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
          <h1>Study-container</h1>
          <div className="Text">
            {text ? <StudyText tokenizedText={tokenizedText} textId={id} savedWords={savedWords} /> : 'Loading text'}
          </div>
        </div>
      </section>
      <aside className="sidebar">
        <h1>Saved Words</h1>
        {savedWordItems}
      </aside>
    </main>
  )
}