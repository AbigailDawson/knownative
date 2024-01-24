import { useState, useEffect } from 'react'
import './DashboardPage.css'
import * as textsAPI from '../../utilities/texts-api'
import NewTextForm from '../../components/NewTextForm/NewTextForm'
import TextListItem from '../../components/TextListItem/TextListItem'

export default function DashboardPage() {
  const [texts, setTexts] = useState([])

  async function handleAddText(textData) {
    const text = await textsAPI.addNewText(textData)
    console.log('text: ', text)
    setTexts([...texts, text])
  }

  useEffect(function() {
    async function getTexts() {
      const texts = await textsAPI.getAll()
      console.log('texts: ', texts)
      setTexts(texts)
    }
    getTexts()
  }, [])

  const TextListItems = texts.map(text => (
    <TextListItem
    key={text._id}
    title={text.title}
    source={text.source}
    content={text.content}
    />
  ))

  return (
  <main className="DashboardPage">
    <h1>DashboardPage</h1>
    <NewTextForm handleAddText={handleAddText} />
    <div className="TextListItems">{TextListItems}</div>
  </main>
  )
}