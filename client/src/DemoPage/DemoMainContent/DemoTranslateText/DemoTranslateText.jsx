import './DemoTranslateText.scss';
import { splitSentences } from '../../../utilities/texts-service';
import DemoSentence from './components/DemoSentence/DemoSentence';

export default function DemoTranslateText({ text }) {
  const sentenceArray = splitSentences(text.content);
  const sentences = sentenceArray.map((sentence, idx) => (
    <DemoSentence key={idx} sentence={sentence} isFirst={idx === 0} />
  ));

  return (
    <div className="translate-text">
      <div className="translate-text__block">{sentences}</div>
    </div>
  );
}
