export default function WordList({words}) {

  const WordListItems = words.map((word, idx) => (
    <li key={idx}> {word} </li>
  ))
  
  return (
    <div className="WordList">
      <h1>All Words</h1>
      <p>All highlighted words</p>
      <ul className="WordListItems">{WordListItems}</ul>
    </div>
  )
}