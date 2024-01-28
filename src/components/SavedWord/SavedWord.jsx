import './SavedWord.css'

export default function SavedWord({ word, isEditMode }) {
  return (
    <div className="SavedWord">
      <div className="saved-word">
        <p className="small"> { word.pinyin } </p>
        <p>{ word.traditional } </p> 
      </div>
      <p>{ word.meaning }</p>
      { isEditMode && (
        <div>
          <button>Edit Word</button>
          <button>Delete Word</button>
        </div>
      )}
    </div>
  )
}