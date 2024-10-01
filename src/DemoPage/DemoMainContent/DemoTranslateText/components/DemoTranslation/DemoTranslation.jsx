import './DemoTranslation.css'

export default function DemoTranslation({ translation, show }) {
  return (
    <p className={`translation zh ${show ? 'show-container' : ''}`}>{ translation }</p>
  )
}