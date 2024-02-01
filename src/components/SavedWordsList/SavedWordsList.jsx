import './SavedWordsList.css'
import { useState } from 'react'
import SavedWord from '../../components/SavedWord/SavedWord'

export default function SavedWordsList({ savedWords, updateMeaning, deleteWord, handleOpen }) {

  const [editingWord, setEditingWord] = useState(null)

  const savedWordItems = savedWords.map((word) => (
    <SavedWord
      key={word._id}
      word={word}
      updateMeaning={updateMeaning}
      isEditingWord={editingWord === word._id}
      setIsEditingWord={setEditingWord}
      deleteWord={deleteWord}
    />
  ))

  return (
    <div className="SavedWordsList">
      <h1 className="sidebar-heading">Saved Words</h1>
      { savedWords.length === 0 ? (
        <>
          <p>No words have been saved yet!</p><br></br>
          <p>Get started by navigating to the Study tab and selecting some words you'd like to study.</p>
        </>
      ) : (
        <>
          <button className="study-btn" onClick={handleOpen}>Study</button>
          {savedWordItems}
        </>

      )}
    </div>
  )
}