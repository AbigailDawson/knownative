import { useState, useEffect } from 'react'
import './DashboardPage.css'
import * as textsAPI from '../../utilities/texts-api'
import NewTextForm from '../../components/NewTextForm/NewTextForm'
import TextListItem from '../../components/TextListItem/TextListItem'

export default function DashboardPage() {
  const [texts, setTexts] = useState([])

  async function handleAddText(textData) {
    const text = await textsAPI.addNewText(textData)
    setTexts([...texts, text])
  }

  useEffect(function() {
    async function getTexts() {
      const texts = await textsAPI.getAll()
      setTexts(texts)
    }
    getTexts()
  }, [])

  const TextListItems = texts.map(text => (
    <TextListItem
    key={text._id}
    id={text._id}
    title={text.title}
    source={text.source}
    content={text.content}
    />
  ))

  return (
  <main className="DashboardPage page">
    <div className="sidebar">
      <h1>Sidebar</h1>
      <p>Sidebar content</p>
    </div>
    {/* <NewTextForm handleAddText={handleAddText} /> */}
    <div className="outer-container">
      <div className="inner-container">
        <h1>My Texts</h1>
        <div className="TextListItems">{TextListItems}</div>
      </div>
    </div>
  </main>
  )
}