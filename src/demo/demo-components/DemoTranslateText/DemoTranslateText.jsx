import './DemoTranslateText.css'
import { splitSentences } from '../../../utilities/texts-service'
import DemoSentence from '../DemoSentence/DemoSentence'

export default function DemoTranslateText({ text }) {

  const sentenceArray = splitSentences(text.content)
  const sentences = sentenceArray.map((sentence, idx) => (
    <DemoSentence
      key={idx}
      sentence={sentence}
      isFirst={idx === 0}
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