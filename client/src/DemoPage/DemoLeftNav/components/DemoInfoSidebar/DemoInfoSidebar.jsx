import './DemoInfoSidebar.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';

export default function DemoInfoSidebar({ handleShowExit, handleBackArrowClick }) {
  const [showEarlyAccessForm, setShowEarlyAccessForm] = useState(false);

  function handleMailingListClick() {
    setShowEarlyAccessForm(true);
  }

  return (
    <div className="info-section">
      <header className="demo-info-header-container">
        <h3 className="sidebar-heading">Info</h3>
        <ChevronLeftIcon
          fontSize="large"
          data-tooltip-id="info-tooltip"
          onClick={handleBackArrowClick}
          className="arrowBack"
          color="#006769"
        />
      </header>

      {showEarlyAccessForm ? (
        <div>
          <p className="text-center fs-6 mt-5">
            We are planning to release a beta version of KnowNative in spring of 2025!
          </p>
          <p className="text-center fs-6">
            As an early access member of KnowNative, you&apos;ll be able to create an account and
            <strong>build your own personalized study portal</strong>, uploading any article
            you&apos;d like to learn from. Your articles, vocabulary lists and notes will all be
            saved so you&apos;ll never have to worry about losing your progress.
          </p>
          <p className="text-center fs-6">
            Sign up to be notified when this beta version is released for a unique opportunity to be
            one of KnowNative&apos;s first members!
          </p>
          <iframe
            className="early-access-form mt-3 mb-5"
            title="early-access-form"
            src="https://embeds.beehiiv.com/512b2f32-1ccd-4254-b0ef-9514515f60d6?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            frameBorder="0"
            scrolling="no"></iframe>
        </div>
      ) : (
        <>
          <div className="info-section-subtext">
            <p>Thank you for trying the KnowNative demo!</p>
            <p>
              KnowNative is currently in development. Check out the links below to learn more or get
              in touch.
            </p>
          </div>
          <button className="demo-info-dark-btn" onClick={handleMailingListClick}>
            Join our mailing list
          </button>
        </>
      )}
      <button
        className="demo-info-light-btn"
        onClick={() => window.open('https://github.com/AbigailDawson/knownative', '_blank')}>
        Visit GitHub
      </button>
      <button className="demo-info-light-btn" onClick={handleShowExit}>
        <label htmlFor="exit-tooltip">Return to homepage</label>
      </button>
    </div>
  );
}
