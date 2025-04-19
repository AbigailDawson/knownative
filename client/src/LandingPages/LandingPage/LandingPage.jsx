import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import Button from '../../ui-components/Button/button';
import Modal from '../../ui-components/Modal/modal';
import './LandingPage.scss';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import LoginModal from '../components/LandingPageLoginModal/LoginModal';
import SignupModal from '../components/LandingPageSignupModal/SignupModal';

// Our authModalReducer function will handle the opening and closing of the authenticantion modals.
const authModalInitialState = { 
  isLoginModalOpen: false, 
  isSignupModalOpen: false 
};

const authModalReducer = function (state, action) {
  switch (action.type) {
    case 'OPEN_LOGIN_MODAL':
      return { 
        isLoginModalOpen: true, 
        isSignupModalOpen: false 
      };
    case 'OPEN_SIGNUP_MODAL':
      return { 
        isLoginModalOpen: false, 
        isSignupModalOpen: true 
      };
    case 'CLOSE_ALL_MODALS':
      return { 
        isLoginModalOpen: false, 
        isSignupModalOpen: false 
      };
    default:
      return state;
  }
};

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [authModalState, authModalDispatch] = useReducer(authModalReducer, authModalInitialState);

  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;
  const { user } = useAuthContext();

  const navigate = useNavigate();

  function handleScreenCheck(route) {
    if (screenHeight <= 1024 || screenWidth <= 1366) {
      setShowModal(true);
    } else {
      navigate(`${route}`);
    }
  }

  function handleModalButtonClick(route) {
    setShowModal(false);
    navigate(`${route}`);
  }

  function handleLoginToggle() {
    authModalDispatch({ type: 'OPEN_LOGIN_MODAL' });
  }

  function handleSignupToggle() {
    authModalDispatch({ type: 'OPEN_SIGNUP_MODAL' });
  }

  function handleCloseAuthModals() {
    authModalDispatch({ type: 'CLOSE_ALL_MODALS' });
  }

  return (
    <>
      <div className="container">
        <LandingPageNav setShowLoginModal={handleLoginToggle} />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="hero-title text-dark">Welcome to KnowNative</h1>
          <div className="col-lg-6 mx-auto">
            <p className="hero-subtitle my-4 text-dark">
              Ditch the textbooks and learn from real native speakers by studying
              articles written by real native speakers. Learning with KnowNative is like
              building your own study guide designed specifically for you.
            </p>

            {/* Sign up and Demo buttons */}
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-5">
              <button
                className="btn btn-teal btn-lg px-4 me-sm-3"
                onClick={handleSignupToggle}
              >
                Sign up
              </button>
              <button
                className="btn btn-secondary-teal btn-lg px-4"
                onClick={() => handleScreenCheck('/demo')}
              >
                Try demo
              </button>
            </div>
          </div>
          <div className="hero-img-container">
            <div className="img-clip-container">
              <img
                src="/images/landing-image.png"
                alt="KnowNative app"
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
            <div className="col-md-6 text-start">
              <h2>Learn with Real Content</h2>
              <p>Study language through authentic articles written by native speakers, not textbook examples.</p>
            </div>
            <div className="col-md-6 text-center">
              <img src="/images/imageComingSoon.png" alt="Real Content" className="feature-image" />
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-2 text-start">
              <h2>Personalized Flashcards</h2>
              <p>Automatically generate flashcards based on your reading activities.</p>
            </div>
            <div className="col-md-6 order-md-1 text-center">
              <img src="/images/imageComingSoon.png" alt="Flashcards" className="feature-image" />
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-start">
              <h2>Smart Annotations</h2>
              <p>Get helpful translations and explanations directly within the text.</p>
            </div>
            <div className="col-md-6 text-center">
              <img src="/images/imageComingSoon.png" alt="Annotations" className="feature-image" />
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
              onClick={() => handleScreenCheck('/demo')}
            >
              Try demo
            </button>
          </div>
          <p className="mt-3">
            Or, <a href="/login" className="login-link">log in to your account</a>
          </p>
        </div>
      </section>
      <LandingPageFooter showLinks={true} />
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
      {authModalState.isLoginModalOpen && (
        <LoginModal 
          setShowModal={() => authModalDispatch({ type: 'CLOSE_ALL_MODALS' })}
          openSignupModal={() => authModalDispatch({ type: 'OPEN_SIGNUP_MODAL' })}
        />
      )}

      {authModalState.isSignupModalOpen && (
        <SignupModal 
          setShowModal={() => authModalDispatch({ type: 'CLOSE_ALL_MODALS' })}
          openLoginModal={() => authModalDispatch({ type: 'OPEN_LOGIN_MODAL' })}
        />
      )}
    </>
  );
}