import './SavedWordsList.css'
import { useState } from 'react'
import SavedWord from '../../components/SavedWord/SavedWord'

export default function SavedWordsList({ savedWords, updateMeaning }) {

  const [editingWord, setEditingWord] = useState(null)

  const savedWordItems = savedWords.map((word) => (
    <SavedWord
      key={word._id}
      word={word}
      updateMeaning={updateMeaning}
      isEditingWord={editingWord === word._id}
      setIsEditingWord={setEditingWord}
    />
  ))

  return (
    <div className="SavedWordsList">
      <h1 className="sidebar-heading">Saved Words</h1>
      {savedWordItems}
    </div>
  )
}