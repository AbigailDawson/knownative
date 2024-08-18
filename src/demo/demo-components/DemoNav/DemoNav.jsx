import "./DemoNav.css";
import { Tooltip } from "react-tooltip";

export default function DemoNav({
  expandSidebar,
  changeSidebarCategory,
  sidebarCategory,
  handleShowExit,
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
      {/* Sidebar Icons */}
      <div className="top-icons">
        <img
          src="/images/placeholder-logo.png"
          alt="logo"
          className="placeholder-logo"
        />
        {/* Saved Words Icon*/}
        <div className="icontip-container">
          <span
            className="material-symbols-outlined side-nav-icon-top"
            onClick={handleCardsClick}
            data-tooltip-id="savedwords-tooltip"
            data-tooltip-content="Saved Words"
            data-tooltip-place="right"
          >
            style
          </span>
          <Tooltip
            id="savedwords-tooltip"
            className="icontip-message"
            delayShow={300}
            disableStyleInjection="true"
          />
        </div>
        {/* Quiz Icon */}
        <div className="icontip-container">
          <span
            className="material-symbols-outlined side-nav-icon-top"
            onClick={handleCardsClick}
            data-tooltip-id="flashcards-tooltip"
            data-tooltip-content="Flashcard Quiz"
            data-tooltip-place="right"
          >
            school
          </span>
          <Tooltip
            id="flashcards-tooltip"
            className="icontip-message"
            delayShow={300}
            disableStyleInjection="true"
          />
        </div>
        {/* Library Icon */}
        <div className="icontip-container">
          <span
            className="material-symbols-outlined side-nav-icon-top"
            onClick={handleCardsClick}
            data-tooltip-id="library-tooltip"
            data-tooltip-content="Library"
            data-tooltip-place="right"
          >
            book_2
          </span>
          <Tooltip
            id="library-tooltip"
            className="icontip-message"
            delayShow={300}
            disableStyleInjection="true"
          />
        </div>
        {/* Info Icon */}
        <div className="icontip-container">
          <span
            className="material-symbols-outlined side-nav-icon-top"
            onClick={handleCardsClick}
            data-tooltip-id="info-tooltip"
            data-tooltip-content="Info"
            data-tooltip-place="right"
          >
            info
          </span>
          <Tooltip
            id="info-tooltip"
            className="icontip-message"
            delayShow={300}
            disableStyleInjection="true"
          />
        </div>
      </div>
      <div className="bottom-icons">
        {/* Support Icon */}
        <div className="icontip-container">
          <span
            className="material-symbols-outlined side-nav-icon-bottom"
            data-tooltip-id="support-tooltip"
            data-tooltip-content="Support"
            data-tooltip-place="right"
          >
            help
          </span>
          <Tooltip
            id="support-tooltip"
            className="icontip-message"
            delayShow={300}
            disableStyleInjection="true"
          />
        </div>
        {/* Exit Icon */}
        <div className="icontip-container">
          <span
            className="material-symbols-outlined side-nav-icon-bottom"
            onClick={handleShowExit}
            data-tooltip-id="exit-tooltip"
            data-tooltip-content="Exit Demo"
            data-tooltip-place="right"
          >
            logout
          </span>
          <Tooltip
            id="exit-tooltip"
            className="icontip-message"
            delayShow={300}
            disableStyleInjection="true"
          />
        </div>
      </div>
    </>
  );
}
