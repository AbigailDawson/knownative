import './Sidebar.css'
import { GiRead } from "react-icons/gi";
import { BiSolidArchive } from "react-icons/bi";
import { TbCardsFilled } from "react-icons/tb";

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
            <div className="stat-heading"> Reading</div>
          </div>
          <div>
            <div className="num">{numTexts}</div>
            <div className="stat-subheading">Texts</div>
          </div>
        </div>

        <div className="stat">
          <div>
            <BiSolidArchive className="stat-icon" />
            <div className="stat-heading"> Archived</div>
          </div>
          <div>
          <div className="num">{numArchivedTexts}</div>
          <div className="stat-heading"> Texts</div>
          </div>
        </div>

        <div className="stat">
          <div>
            <TbCardsFilled className="stat-icon" />
            <div className="stat-heading">Saved</div>
          </div>
          <div>
            <div className="num">{numSavedWords}</div>
            <div className="stat-subheading">Words</div>
          </div>
        </div>
        
      </div>
    </>
  )
}