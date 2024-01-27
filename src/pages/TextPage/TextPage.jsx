import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './TextPage.css'
import StudyText from '../../components/StudyText/StudyText'
import ReadText from '../../components/ReadText/ReadText'
import * as textsAPI from '../../utilities/texts-api'

export default function TextPage() {

  const { id } = useParams()
  const [text, setText] = useState(null)
  const [tokenizedText, setTokenizedText] = useState([])
  const [activeTab, setActiveTab] = useState('read')

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

  function handleTabClick(tabName) {
    setActiveTab(tabName)
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
          <h1>Study-container</h1>
          <div className="Text">
            {text ? <StudyText tokenizedText={tokenizedText} textId={id} /> : 'Loading text'}
          </div>
        </div>
      </section>
      <aside className="sidebar">
        <h1>Study Words</h1>
        <div>Hello!</div>
        <div>Hello!</div>
        <div>Hello!</div>
        <div>Hello!</div>
      </aside>
    </main>
  )
}