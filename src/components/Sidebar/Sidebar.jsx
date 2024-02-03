import './Sidebar.css'
import { GiRead } from "react-icons/gi";

export default function Sidebar({ user, numTexts, numArchivedTexts, numSavedWords }) {

  return (
    <>
      <div className="sidebar-heading">
        <h3>Welcome back</h3>
        <h1>{user.name}</h1>
      </div>
      <div className="stats">
        
        <div className="stat">
          <div>
            <GiRead className="stat-icon" />
            <div className="stat-heading">Currently Reading</div>
          </div>
          <div className="num">{numTexts}</div>
        </div>
        
        <div className="stat">
          <div>
            <GiRead className="stat-icon" />
            <div className="stat-heading">Saved Words</div>
          </div>
          <div className="num">{numSavedWords}</div>
        </div>

        <div className="stat">
          <div>
            <GiRead className="stat-icon" />
            <div className="stat-heading"> Texts</div>
          </div>
          <div className="num">{numArchivedTexts}</div>
        </div>
        
      </div>
    </>
  )
}