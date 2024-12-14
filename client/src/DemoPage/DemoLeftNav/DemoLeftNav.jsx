import './DemoLeftNav.scss';

export default function DemoLeftNav({
  expandSidebar,
  changeSidebarCategory,
  sidebarCategory,
  savedWords,
  handleShowExit
}) {
  function handleCardsClick(e) {
    const selectedIcon = e.currentTarget.id;
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
      <div className="sidebar-icons__top-icons">
        <img
          src="/images/transparent-square-logo.png"
          alt="knownative logo"
          className="sidebar-icons__square-logo"
        />
        {/* Saved Words Icon*/}
        <button
          id="savedwords-tooltip"
          className={`sidebar-icons__icontip-container ${
            sidebarCategory === 'savedwords-tooltip'
              ? 'sidebar-icons__button--active sidebar-icons__google-icons--shaded'
              : 'sidebar-icons__google-icons--outline'
          }`}
          onClick={handleCardsClick}
          aria-label="Saved Words"
          aria-expanded={sidebarCategory === 'savedwords-tooltip' ? 'true' : 'false'}>
          <span className="sidebar-icons__sidenav-icon sidebar-icons__sidenav-icon--flipped material-symbols-outlined">&#xe41d;</span>
          <label className='sidebar-icons__icontip-container--label' htmlFor="savedwords-tooltip">Terms</label>
          {savedWords.length > 0 && <span className="sidebar-icons__badge">{savedWords.length}</span>}
        </button>
        {/* Learn Icon */}
        <button
          id="flashcards-tooltip"
          className={`sidebar-icons__icontip-container ${
            sidebarCategory === 'flashcards-tooltip'
              ? 'sidebar-icons__button--active sidebar-icons__google-icons--shaded'
              : 'sidebar-icons__google-icons--outline'
          }`}
          onClick={handleCardsClick}
          aria-label="Learn"
          aria-expanded={sidebarCategory === 'flashcards-tooltip' ? 'true' : 'false'}>
          <span className="material-symbols-outlined sidebar-icons__sidenav-icon">&#xe80c;</span>
          <label className='sidebar-icons__icontip-container--label' htmlFor="flashcards-tooltip">Learn</label>
        </button>
        {/* Library Icon */}
        <button
          id="library-tooltip"
          className={`sidebar-icons__icontip-container ${
            sidebarCategory === 'library-tooltip'
              ? 'sidebar-icons__button--active sidebar-icons__google-icons--shaded'
              : 'sidebar-icons__google-icons--outline'
          }`}
          onClick={handleCardsClick}
          aria-label="Library"
          aria-expanded={sidebarCategory === 'library-tooltip' ? 'true' : 'false'}>
          <span className="sidebar-icons__sidenav-icon material-symbols-outlined">&#xf53e;</span>
          <label className='sidebar-icons__icontip-container--label' htmlFor="library-tooltip">Library</label>
        </button>
        {/* Info Icon */}
        <button
          id="info-tooltip"
          className={`sidebar-icons__icontip-container ${
            sidebarCategory === 'info-tooltip' ? 'sidebar-icons__button--active sidebar-icons__google-icons--shaded' : ''
          }`}
          onClick={handleCardsClick}
          aria-label="Info"
          aria-expanded={sidebarCategory === 'info-tooltip' ? 'true' : 'false'}>
          <span className="sidebar-icons__sidenav-icon material-symbols-outlined">&#xe88e;</span>
          <label className='sidebar-icons__icontip-container--label' htmlFor="info-tooltip">Info</label>
        </button>
      </div>
      <div className="sidebar-icons__bottom-icons">
        <button
          id="exit-tooltip"
          className={`sidebar-icons__icontip-container ${
            sidebarCategory === 'exit-tooltip' ? 'sidebar-icons__button--active sidebar-icons__google-icons--shaded' : ''
          }`}
          onClick={handleShowExit}
          aria-label="Exit"
          aria-expanded={sidebarCategory === 'exit-tooltip' ? 'true' : 'false'}>
          <span className="material-symbols-outlined sidebar-icons__sidenav-icon">&#xe9ba;</span>
          <label className='sidebar-icons__icontip-container--label' htmlFor="exit-tooltip">Exit</label>
        </button>
      </div>
    </>
  );
}
