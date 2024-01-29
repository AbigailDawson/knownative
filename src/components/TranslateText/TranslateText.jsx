import './TranslateText.css'
import { splitSentences } from '../../utilities/texts-service'
import Sentence from '../../components/Sentence/Sentence'

export default function TranslateText({ text }) {

  const sentenceArray = splitSentences(text.content)
  const sentences = sentenceArray.map((sentence, idx) => (
    <Sentence
      key={idx}
      sentence={sentence}
    />
  ))

  return (
    <div className="TranslateText">
      <h1>{text.title}</h1>
      <h3>Source: {text.source}</h3>
        <div className="translate-text-block">
          {sentences}
        </div>
    </div>
  )
}