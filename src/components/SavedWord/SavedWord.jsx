import './SavedWord.css'

export default function SavedWord({ word }) {
  return (
    <div className="SavedWord">
      <p>{ word.traditional } &nbsp; { word.pinyin } </p> <p>{ word.meaning }</p>
    </div>
  )
}