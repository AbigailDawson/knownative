export default function SavedWord({ word }) {
  return (
    <div className="SavedWord">
      <p>{ word.traditional }</p>
      <p>{ word.pinyin }</p>
      <p>{ word.meaning }</p>
    </div>
  )
}