import "./DemoNav.css";

export default function DemoNav({
  expandSidebar,
  changeSidebarCategory,
  sidebarCategory,
  savedWords,
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
        <button
          id="savedwords-tooltip"
          className={`icontip-container ${
            sidebarCategory === "savedwords-tooltip"
              ? "button-active google-icons-shaded"
              : "google-icons-outline"
          }`}
          onClick={handleCardsClick}
          aria-label="Saved Words"
          aria-expanded={sidebarCategory ===  "savedwords-tooltip" ? "true" : "false"}
        >
          <span className="material-symbols-outlined side-nav-icon-top icon-flipped">
            style
          </span>
          <label htmlFor="savedwords-tooltip">Terms</label>
          {savedWords.length > 0 && (
            <span className="badge">{savedWords.length}</span>
          )}
        </button>
        {/* Learn Icon */}
        <button
          id="flashcards-tooltip"
          className={`icontip-container ${
            sidebarCategory === "flashcards-tooltip"
              ? "button-active google-icons-shaded"
              : "google-icons-outline"
          }`}
          onClick={handleCardsClick}
          aria-label="Learn"
          aria-expanded={sidebarCategory === "flashcards-tooltip" ? "true" : "false"}
        >
          <span className="material-symbols-outlined side-nav-icon-top">
            school
          </span>
          <label htmlFor="flashcards-tooltip">Learn</label>
        </button>
        {/* Library Icon */}
        <button
          id="library-tooltip"
          className={`icontip-container ${
            sidebarCategory === "library-tooltip"
              ? "button-active google-icons-shaded"
              : "google-icons-outline"
          }`}
          onClick={handleCardsClick}
          aria-label="Library"
          aria-expanded={sidebarCategory === "library-tooltip" ? "true" : "false"}
        >
          <span className="material-symbols-outlined side-nav-icon-top">
            book_2
          </span>
          <label htmlFor="library-tooltip">Library</label>
        </button>
        {/* Info Icon */}
        <button
          id="info-tooltip"
          className={`icontip-container ${
            sidebarCategory === "info-tooltip"
              ? "button-active google-icons-shaded"
              : ""
          }`}
          onClick={handleCardsClick}
          aria-label="Info"
          aria-expanded={sidebarCategory === "info-tooltip" ? "true" : "false"}
        >
          <span className="material-symbols-outlined side-nav-icon-top">
            info
          </span>
          <label htmlFor="info-tooltip">Info</label>
        </button>
      </div>
    </>
  );
}
