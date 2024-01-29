import './SavedWordsList.css'
import SavedWord from '../../components/SavedWord/SavedWord'

export default function SavedWordsList({ savedWords, toggleEditMode, isEditMode, updateMeaning }) {

  function handleEditListClick() {
    toggleEditMode()
  }

  const savedWordItems = savedWords.map((word) => (
    <SavedWord
      key={word._id}
      word={word}
      isEditMode={isEditMode}
      updateMeaning={updateMeaning}
    />
  ))

  return (
    <div className="SavedWordsList">
      <h1>Saved Words</h1>
      <button className="edit-list-btn" onClick={handleEditListClick}>Edit List</button>
      {savedWordItems}
      
    </div>
  )
}