import './DemoNav.css'
import { TbCardsFilled } from "react-icons/tb";
import { MdQuiz } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'

export default function DemoNav({ expandSidebar }) {

  function handleCardsClick(evt) {
    expandSidebar()
  }

  return (
    <>
      <div className='top-icons'>
        <img src="/images/placeholder-logo.png" alt="logo" className="placeholder-logo" />
        <TbCardsFilled 
          className="side-nav-icon-top" 
          onClick={handleCardsClick} 
          data-tooltip-id="savedwords-tooltip" 
          data-tooltip-content="Saved Words" 
          data-tooltip-place="right" 
        />
        <Tooltip id="savedwords-tooltip" className="icon-tool-tip"
        border="1px solid #526662" />
        <MdQuiz 
          className="side-nav-icon-top" 
          data-tooltip-id="flashcards-tooltip" 
          data-tooltip-content="Flashcard Quiz" 
          data-tooltip-place="right" 
        />
        <Tooltip id="flashcards-tooltip" className="icon-tool-tip"
        border="1px solid #526662" />
        <FaArrowsRotate 
          className="side-nav-icon-top" 
          data-tooltip-id="changetext-tooltip" 
          data-tooltip-content="Change Text" 
          data-tooltip-place="right" 
        />
        <Tooltip id="changetext-tooltip" className="icon-tool-tip" 
        border="1px solid #526662" />
      </div>
      <div className="bottom-icons">
        <FaRegQuestionCircle  
          className="side-nav-icon-bottom" 
          data-tooltip-id="support-tooltip" 
          data-tooltip-content="Support" 
          data-tooltip-place="right"
        />
        <Tooltip id="support-tooltip" className="icon-tool-tip" 
        border="1px solid #526662" />
        <ImExit 
          className="side-nav-icon-bottom" 
          data-tooltip-id="exit-tooltip" 
          data-tooltip-content="Exit Demo" 
          data-tooltip-place="right" 
        />
        <Tooltip id="exit-tooltip" className="icon-tool-tip" 
        border="1px solid #526662"/>
      </div>
    </>
  )
}