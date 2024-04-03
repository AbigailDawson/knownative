import './DemoTranslateText.css'
import { splitSentences } from '../../utilities/texts-service'
import Sentence from '../../demo/demo-components/DemoSentence/DemoSentence'

export default function DemoTranslateText({ text }) {

  const sentenceArray = splitSentences(text.content)
  const sentences = sentenceArray.map((sentence, idx) => (
    <Sentence
      key={idx}
      sentence={sentence}
    />
  ))

  return (
    <div className="TranslateText">
        <div className="translate-text-block">
          {sentences}
        </div>
    </div>
  )
}