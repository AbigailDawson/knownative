import "./DemoNav.css";

export default function DemoNav({
  expandSidebar,
  changeSidebarCategory,
  sidebarCategory,
  handleShowExit,
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
        <div className="icontip-container">
          <span
            id="savedwords-tooltip"
            className="material-symbols-outlined side-nav-icon-top"
            onClick={handleCardsClick}
          >
            style
          </span>
          <label htmlFor="">Terms</label>
        </div>
        {/* Quiz Icon */}
        <div className="icontip-container">
          <span
            id="flashcards-tooltip"
            className="material-symbols-outlined side-nav-icon-top"
            onClick={handleCardsClick}
          >
            school
          </span>
          <label htmlFor="">Learn</label>
        </div>
        {/* Library Icon */}
        <div className="icontip-container">
          <span
            id="library-tooltip"
            className="material-symbols-outlined side-nav-icon-top"
            onClick={handleCardsClick}
          >
            book_2
          </span>
          <label htmlFor="">Library</label>
        </div>
        {/* Info Icon */}
        <div className="icontip-container">
          <span
            id="info-tooltip"
            className="material-symbols-outlined side-nav-icon-top"
            onClick={handleCardsClick}
          >
            info
          </span>
          <label htmlFor="">Info</label>
        </div>
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
