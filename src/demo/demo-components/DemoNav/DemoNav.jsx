import './DemoNav.css'
import { TbCardsFilled } from "react-icons/tb";
import { MdQuiz } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function DemoNav({ expandSidebar }) {

  function handleCardsClick(evt) {
    expandSidebar()
  }

  return (
    <>
      <div className='top-icons'>
        <img src="/images/placeholder-logo.png" alt="logo" className="placeholder-logo" />
        <TbCardsFilled className="side-nav-icon-top" onClick={handleCardsClick} />
        <MdQuiz className="side-nav-icon-top" />
        <FaArrowsRotate className="side-nav-icon-top" />
      </div>
      <div className="bottom-icons">
        <FaRegQuestionCircle className="side-nav-icon-bottom" />
        <ImExit className="side-nav-icon-bottom" />
      </div>
    </>
  )
}