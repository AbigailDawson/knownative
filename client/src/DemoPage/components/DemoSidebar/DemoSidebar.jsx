import './DemoSidebar.scss';
import { GiRead } from 'react-icons/gi';
import { BiSolidArchive } from 'react-icons/bi';
import { TbCardsFilled } from 'react-icons/tb';

export default function DemoSidebar({ user, numTexts, numArchivedTexts, numSavedWords }) {
  return (
    <>
      <div className="sidebar__heading">
        <h3 className="sidebar__welcome">Welcome back</h3>
        <h1>{user.name}</h1>
      </div>
      <div className="stats-container">
        <div className="stats-container__stat">
          <div>
            <GiRead className="stats-container__stat--icon" />
            <div className="stats-container__stat--heading"> Reading</div>
          </div>
          <div>
            <div className="num">{numTexts}</div>
            <div className="stats-container__stat--subheading">Texts</div>
          </div>
        </div>

        <div className="stats-container__stat">
          <div>
            <BiSolidArchive className="stats-container__stat--icon" />
            <div className="stats-container__stat--heading"> Archived</div>
          </div>
          <div>
            <div className="num">{numArchivedTexts}</div>
            <div className="stats-container__stat--heading"> Texts</div>
          </div>
        </div>

        <div className="stats-container__stat">
          <div>
            <TbCardsFilled className="stats-container__stat--icon" />
            <div className="stats-container__stat--heading">Saved</div>
          </div>
          <div>
            <div className="stats-container__num">{numSavedWords}</div>
            <div className="stats-container__stat--subheading">Words</div>
          </div>
        </div>
      </div>
    </>
  );
}
