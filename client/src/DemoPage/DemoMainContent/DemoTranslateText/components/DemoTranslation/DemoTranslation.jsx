import './DemoTranslation.scss'

export default function DemoTranslation({ translation, show }) {
  return (
    <p className={`sentence-translation zh ${show ? 'show-container' : ''}`}>{ translation }</p>
  )
}