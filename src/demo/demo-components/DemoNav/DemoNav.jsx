import "./DemoNav.css";

export default function DemoNav({
  expandSidebar,
  changeSidebarCategory,
  sidebarCategory,
}) {
  function handleCardsClick(e) {
    const selectedIcon = e.currentTarget.id;
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
        <button id="savedwords-tooltip" className="icontip-container" onClick={handleCardsClick}>
          <span
            className="material-symbols-outlined side-nav-icon-top"
          >
            style
          </span>
          <label htmlFor="">Terms</label>
        </button>
        {/* Quiz Icon */}
        <button id="flashcards-tooltip" className="icontip-container" onClick={handleCardsClick}>
          <span
            className="material-symbols-outlined side-nav-icon-top"
          >
            school
          </span>
          <label htmlFor="">Learn</label>
        </button>
        {/* Library Icon */}
        <button id="library-tooltip" className="icontip-container" onClick={handleCardsClick}>
          <span
            className="material-symbols-outlined side-nav-icon-top"
            
          >
            book_2
          </span>
          <label htmlFor="">Library</label>
        </button>
        {/* Info Icon */}
        <button id="info-tooltip" className="icontip-container" onClick={handleCardsClick}>
          <span
            className="material-symbols-outlined side-nav-icon-top"
          >
            info
          </span>
          <label htmlFor="">Info</label>
        </button>
      </div>
      {/* <div className="bottom-icons"> */}
        {/* Support Icon */}
        {/* <div className="icontip-container">
          <span
            id="support-tooltip"
            className="material-symbols-outlined side-nav-icon-bottom"
          >
            help
          </span>
        </div> */}
        {/* Exit Icon */}
        {/* <div className="icontip-container">
          <span
            className="material-symbols-outlined side-nav-icon-bottom"
            onClick={handleShowExit}
          >
            logout
          </span>
        </div>
      </div> */}
    </>
  );
}
