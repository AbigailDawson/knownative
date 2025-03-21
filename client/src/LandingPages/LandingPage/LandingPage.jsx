import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import Modal from '../../ui-components/Modal/modal';
import './LandingPage.scss';

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Check screen size and show warning for small screens
  function handleScreenCheck() {
    if (window.screen.height <= 1024 || window.screen.width <= 1366) {
      setShowModal(true);
    } else {
      navigate('/demo');
    }
  }

  function handleModalButtonClick() {
    setShowModal(false);
    navigate('/demo');
  }

  return (
    <>
      <LandingPageNav />
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold text-dark">Welcome to KnowNative</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead my-4 text-dark">
                Ditch the textbooks and learn from real native speakers by studying
                articles written by real native speakers. Learning with KnowNative is like
                building your own study guide designed specifically for you.
              </p>
              
              {/* Sign up and Demo buttons */}
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-5">
                <button
                  className="btn btn-teal btn-lg px-4 me-sm-3"
                  onClick={() => navigate('/signup')}
                >
                  Sign up
                </button>
                <button
                  className="btn btn-secondary-teal btn-lg px-4" 
                  onClick={handleScreenCheck}
                >
                  Try demo
                </button>
              </div>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
              <div className="container px-5">
                <img
                  src="/images/landing-image.png"
                  className="img-fluid border rounded-3 shadow-lg mb-4"
                  alt="KnowNative app"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="features py-5">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <h2>Learn with Real Content</h2>
                <p>Study language through authentic articles written by native speakers, not textbook examples.</p>
              </div>
              <div className="col-md-6">
                <img src="/images/imageComingSoon.png" alt="Real Content" className="feature-image"/>
              </div>
            </div>
            
            <div className="row align-items-center mb-5">
              <div className="col-md-6 order-md-2">
                <h2>Personalized Flashcards</h2>
                <p>Automatically generate flashcards based on your reading activities.</p>
              </div>
              <div className="col-md-6 order-md-1">
                <img src="/images/imageComingSoon.png" alt="Flashcards" className="feature-image"/>
              </div>
            </div>
            
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <h2>Smart Annotations</h2>
                <p>Get helpful translations and explanations directly within the text.</p>
              </div>
              <div className="col-md-6">
                <img src="/images/imageComingSoon.png" alt="Annotations" className="feature-image"/>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container text-center py-5">
            <h2 className="mb-3">Ready to get started?</h2>
            <p className="mb-4">Create a free account to start learning with KnowNative.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button 
                className="btn btn-teal btn-lg px-4 me-sm-3"
                onClick={() => navigate('/signup')}
              >
                Sign up
              </button>
              <button 
                className="btn btn-outline-teal btn-lg px-4" 
                onClick={handleScreenCheck}
              >
                Try demo
              </button>
            </div>
            <p className="mt-3">
              Or, <a href="/login" className="login-link">log in to your account</a>
            </p>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="container text-center py-4">
          <div className="footer-links mb-3">
            <a href="/features" className="footer-link mx-3">Features</a>
            <a href="/pricing" className="footer-link mx-3">Pricing</a>
            <a href="/faqs" className="footer-link mx-3">FAQs</a>
            <a href="/about" className="footer-link mx-3">About</a>
          </div>
          <hr className="footer-divider" />
          <p className="copyright">© 2024 KnowNative</p>
        </div>
      </footer>
      
      {/* Modal for mobile warning */}
      {showModal && (
        <Modal
          canCloseOnEscapeKey={false}
          buttonPrimaryText="Continue Anyways"
          buttonSecondaryText="Back"
          handleSecondaryButtonOnClick={() => setShowModal(false)}
          handlePrimaryButtonOnClick={handleModalButtonClick}
          hasCloseButton={false}
          modalTitle="KnowNative is not optimized for mobile devices!"
          setShowModal={setShowModal}
        >
          <div className="landing-page-modal-content">
            <div>
              Please consider using KnowNative on your desktop device until our mobile version is
              available.
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}