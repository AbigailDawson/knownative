import * as textsAPI from '../../utilities/texts-api'
import { useState } from 'react'

export default function Sentence({sentence}) {
  const [translation, setTranslation] = useState('');

  async function handleTranslate(sentence) {
    const translatedSentence = await textsAPI.translateSentence(sentence)
    setTranslation(translatedSentence)
  }

  return (
    <>
      <p>{sentence}</p>
      <button onClick={() => handleTranslate(sentence)}>Translate</button>
      {translation && <p>Translation: {translation}</p>}
    </>

  )
}