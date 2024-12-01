import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import Button from '../../ui-components/Button/button';
import Modal from '../../ui-components/Modal/modal';
import './LandingPage.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import LoginModal from '../components/LandingPageLoginModal/LoginModal';

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

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

  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="hero">
          <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold">Welcome to KnowNative</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead my-4">
                Transform your language learning with real-world articles written by native
                speakers. KnowNative personalizes your study experience with{' '}
                <span className="landing-page-bold">automatically generated flashcards</span>,{' '}
                <span className="landing-page-bold">inline annotations</span> and{' '}
                <span className="landing-page-bold">context-driven translations</span>, creating
                tailored learning tools that are uniquely yours.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-5">
                <Button
                  buttonText={'Demo'}
                  buttonOnClickFunc={() => handleScreenCheck('/demo')}
                  buttonVariant={'primary'}
                />
                <a
                  href="https://github.com/AbigailDawson/knownative"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg px-4 github-button">
                  GitHub
                </a>

                {/* temporary button element for login modal. Based on wireframes, this might move elsewhere */}
                <div>
                  <button
                    className="btn btn-lg px-4 login-button"
                    onClick={() => setShowLoginModal(true)}>
                    Login
                  </button>

                  {/* Conditionally render the LoginModal */}
                  {showLoginModal && <LoginModal setShowModal={() => setShowLoginModal(false)} />}
                </div>
                <Link to="/signup" className="btn btn-lg px-4 signup-button">
                  Sign up
                </Link>
              </div>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: 30 + 'vh' }}>
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
        <section className="mailing-list">
          <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
              <div className="col-md-10 mx-auto col-lg-6 mt-4 pe-5">
                <h1 className="display-6 fw-bold lh-1 mb-4">Get in touch</h1>
                <p className="">
                  Questions about KnowNative? Feel free to reach out via email at{' '}
                  <a
                    href="mailto:abigaildawson.dev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knownative-link">
                    abigaildawson.dev@gmail.com
                  </a>{' '}
                  or check out our{' '}
                  <a
                    href="https://github.com/AbigailDawson/knownative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="knownative-link">
                    GitHub
                  </a>
                  .
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-center media-links mb-5">
                  <a
                    href="https://www.linkedin.com/in/abigaildawsondev/"
                    className="btn btn-sm px-2 social-links">
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/AbigailDawson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm px-2 social-links">
                    <FaGithub />
                  </a>
                  <a
                    href="mailto:abigaildawson.dev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm px-2 social-links">
                    <MdEmail />
                  </a>
                  <a
                    href="https://x.com/abigailddev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm px-2 social-links">
                    <FaXTwitter />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-center d-flex flex-column align-items-center text-lg-start early-access">
                <h3 className="fw-bold lh-1">Sign up for early access</h3>
                <iframe
                  className="early-access-form my-4"
                  title="early-access-form"
                  src="https://embeds.beehiiv.com/512b2f32-1ccd-4254-b0ef-9514515f60d6?slim=true"
                  data-test-id="beehiiv-embed"
                  height="52"
                  frameBorder="0"
                  scrolling="no"></iframe>
                <p className="col-lg-12 fs-6 text-center">
                  We&apos;re planning to release a beta version of KnowNative by spring of 2025!
                </p>
                <p className="col-lg-12 fs-6 text-center">
                  As a member, you&apos;ll be be able to build your own{' '}
                  <span className="landing-page-bold">personalized study guide</span> with your own
                  imported articles. Everything will be saved so you&apos;ll never have to worry
                  about losing your notes.
                </p>
                <p className="col-lg-12 fs-6 text-center">
                  Sign up to be notified when this beta version is released for a unique opportunity
                  to be one of KnowNative&apos;s first members.
                </p>
              </div>
            </div>
          </div>
        </section>
        <LandingPageFooter />
        {showModal ? (
          <Modal
            canCloseOnEscapeKey={false}
            buttonPrimaryText="Continue Anyways"
            buttonSecondaryText="Back"
            handleSecondaryButtonOnClick={() => setShowModal(false)}
            handlePrimaryButtonOnClick={() => handleModalButtonClick('/demo')}
            hasCloseButton={false}
            modalTitle="KnowNative is not optimized for mobile devices!"
            setShowModal={setShowModal}>
            <div className="landing-page-modal-content">
              <div>
                Please consider using KnowNative on your desktop device until our mobile version is
                available.
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </>
  );
}
