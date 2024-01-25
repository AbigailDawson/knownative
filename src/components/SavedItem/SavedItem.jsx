export default function SavedItem({ traditional, simplified, pinyin, meaning }) {
  return(
    <div className='SavedItem'>
      <p>{traditional}</p>
      <p>{simplified}</p>
      <p>{pinyin}</p>
      <p>{meaning}</p>
    </div>
  )
}