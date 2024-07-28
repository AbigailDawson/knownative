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
      {/* Sidebar Icons */}
      <div className="top-icons">
        <img
          src="/images/placeholder-logo.png"
          alt="logo"
          className="placeholder-logo"
        />
        {/* Saved Words Icon*/}
        <div className="icontip-container">
          <TbCardsFilled
            className="side-nav-icon-top"
            onClick={handleCardsClick}
            data-tooltip-id="savedwords-tooltip"
            data-tooltip-content="Saved Words"
            data-tooltip-place="right"
          />
          <Tooltip
            id="savedwords-tooltip"
            className="icontip-message"
            border="1px solid var(--medium)"
            disableStyleInjection="true"
          />
        </div>
        {/* Quiz Icon */}
        <div className="icontip-container">
          <MdQuiz
            className="side-nav-icon-top"
            data-tooltip-id="flashcards-tooltip"
            data-tooltip-content="Flashcard Quiz"
            data-tooltip-place="right"
          />
          <Tooltip
            id="flashcards-tooltip"
            className="icontip-message"
            border="1px solid var(--medium)"
            disableStyleInjection="true"
          />
        </div>
        {/* Change Text Icon */}
        <div className="icontip-container">
          <FaArrowsRotate
            className="side-nav-icon-top"
            data-tooltip-id="changetext-tooltip"
            data-tooltip-content="Change Text"
            data-tooltip-place="right"
            disableStyleInjection="true"
          />
          <Tooltip
            id="changetext-tooltip"
            className="icontip-message"
            border="1px solid var(--medium)"
            disableStyleInjection="true"
          />
        </div>
      </div>
      <div className="bottom-icons">
        {/* Support Icon */}
        <div className="icontip-container">
          <FaRegQuestionCircle
            className="side-nav-icon-bottom"
            data-tooltip-id="support-tooltip"
            data-tooltip-content="Support"
            data-tooltip-place="right"
          />
          <Tooltip
            id="support-tooltip"
            className="icontip-message"
            border="1px solid var(--medium)"
            disableStyleInjection="true"
          />
        </div>
        {/* Exit Icon */}
        <div className="icontip-container">
          <ImExit
            className="side-nav-icon-bottom"
            data-tooltip-id="exit-tooltip"
            data-tooltip-content="Exit Demo"
            data-tooltip-place="right"
          />
          <Tooltip
            id="exit-tooltip"
            className="icontip-message"
            border="1px solid var(--medium)"
            disableStyleInjection="true"
          />
        </div>
      </div>
    </>
  );
}