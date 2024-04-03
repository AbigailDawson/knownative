import './DemoSavedWordsList.css'
import { useState } from 'react'
import SavedWord from '../../demo/demo-components/DemoSavedWord/DemoSavedWord'
import { TbCardsFilled } from "react-icons/tb";

export default function DemoSavedWordsList({ savedWords, updateMeaning, deleteWord, handleOpen, gameInProgress }) {

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
        <div className="study-btn">
          <TbCardsFilled className="study-icon" onClick={handleOpen} />
          <p className="study-btn-txt"> </p>
        </div>
        { !gameInProgress && savedWordItems}
        </>
      )}
    </div>
  )
}