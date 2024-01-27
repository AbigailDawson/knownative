import './SavedWordsList.css'
import SavedWord from '../../components/SavedWord/SavedWord'

export default function SavedWordsList({ savedWords, toggleEditMode, isEditMode }) {

  function handleEditListClick() {
    toggleEditMode()
  }

  const savedWordItems = savedWords.map((word) => (
    <SavedWord
      key={word.id}
      word={word}
      isEditMode={isEditMode}
    />
  ))

  return (
    <div className="SavedWordsList">
      <h1>Saved Words</h1>
      <button onClick={handleEditListClick}>Edit List</button>
      {savedWordItems}
    </div>
  )
}