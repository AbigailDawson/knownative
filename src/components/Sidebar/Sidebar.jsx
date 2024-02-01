import './Sidebar.css'
import * as wordsAPI from '../../utilities/words-api'

export default function Sidebar({ user, numTexts, numArchivedTexts, numSavedWords }) {

  return (
    <>
    <div className="sidebar-heading">
      <h3>Welcome back</h3>
      <h1>{user.name}</h1>
    </div>
    <div className="stats">
      <p>Reading: <span className="num">{ numTexts }</span></p>
      <p>Archived: <span className="num">{ numArchivedTexts }</span></p>
      <p>Saved words: <span className="num">{ numSavedWords }</span></p>
    </div>
      
      
    </>
  )
}