import { useState } from 'react'
import './MainPage.css'
import Text from '../../components/Text/Text'
import WordList from '../../components/WordList/WordList'
import SavedWordList from '../../components/SavedWordList/SavedWordList'

export default function MainPage() {

  const [words, setWords] = useState([])
  const [savedWords, setSavedWords] = useState([])
  const [selectedText, setSelectedText] = useState('')

  function addWord(newWord) {
    setWords([...words, newWord])
  }

  function saveWord(newWord) {
    setSavedWords([...savedWords, newWord])
  }

  return (
    <main className="MainPage">
      <section className="content">
        <Text 
        setSelectedText={setSelectedText} 
        addWord={addWord} 
        saveWord={saveWord} 
        />
        <div className="words-column">
          <WordList words={words} />
          <SavedWordList savedWords={savedWords} />
        </div>
      </section>
    </main>
  )
}