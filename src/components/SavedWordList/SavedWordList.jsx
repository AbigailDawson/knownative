export default function SavedWordList({ savedWords }) {
  
  const SavedWordListItems = savedWords.map((word, idx) => (
    <li key={idx}> {word} </li>
  ))

  return (
    <div className="SavedWordList">
      <h1>Saved</h1>
      <p>Words saved using the Save button</p>
      <ul className="SavedWordListItems">{SavedWordListItems}</ul>
    </div>
  )
}