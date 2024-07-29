import "./DemoNav.css";
import { TbCardsFilled } from "react-icons/tb";
import { MdQuiz } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { FaRegQuestionCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

export default function DemoNav({
  expandSidebar,
  changeSidebarCategory,
  sidebarCategory,
}) {
  function handleCardsClick(e) {
    const selectedIcon = e.currentTarget.dataset.tooltipId;
    console.log("selected icon: ", selectedIcon);
    //if there's no sidebar present, then expand the sidebar based on what the user clicked.
    if (sidebarCategory === null) {
      changeSidebarCategory(selectedIcon);
      expandSidebar();
      return;
    }
    //if the sidebar is present, but you're pressing a different button, just switch the content of the sidebar
    if (sidebarCategory !== selectedIcon) {
      changeSidebarCategory(selectedIcon);
      return;
    }
    //if the sidebar is present, and you're clicking the same icon on the navbar, close the sidebar
    if (sidebarCategory === selectedIcon) {
      expandSidebar();
      changeSidebarCategory(selectedIcon);
      return;
    }
  }

  return (
    <>
      <div className="top-icons">
        <img
          src="/images/placeholder-logo.png"
          alt="logo"
          className="placeholder-logo"
        />
        <TbCardsFilled
          className="side-nav-icon-top"
          onClick={handleCardsClick}
          data-tooltip-id="savedwords-tooltip"
          data-tooltip-content="Saved Words"
          data-tooltip-place="right"
        />
        <Tooltip id="savedwords-tooltip" />
        <MdQuiz
          className="side-nav-icon-top"
          onClick={handleCardsClick}
          data-tooltip-id="flashcards-tooltip"
          data-tooltip-content="Flashcard Quiz"
          data-tooltip-place="right"
        />
        <Tooltip id="flashcards-tooltip" />
        <FaArrowsRotate
          className="side-nav-icon-top"
          data-tooltip-id="changetext-tooltip"
          data-tooltip-content="Change Text"
          data-tooltip-place="right"
        />
        <Tooltip id="changetext-tooltip" />
      </div>
      <div className="bottom-icons">
        <FaRegQuestionCircle
          className="side-nav-icon-bottom"
          data-tooltip-id="support-tooltip"
          data-tooltip-content="Support"
          data-tooltip-place="right"
        />
        <Tooltip id="support-tooltip" />
        <ImExit
          className="side-nav-icon-bottom"
          data-tooltip-id="exit-tooltip"
          data-tooltip-content="Exit Demo"
          data-tooltip-place="right"
        />
        <Tooltip id="exit-tooltip" />
      </div>
    </>
  );
}
