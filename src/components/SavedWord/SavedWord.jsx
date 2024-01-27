import './SavedWord.css'

export default function SavedWord({ word, isEditMode }) {
  return (
    <div className="SavedWord">
      <p>{ word.traditional } &nbsp; { word.pinyin } </p> <p>{ word.meaning }</p>
      { isEditMode && (
        <div>
          <button>Edit Word</button>
          <button>Delete Word</button>
        </div>
      )}
    </div>
  )
}