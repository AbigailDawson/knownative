import LandingPageNav from '../../components/LandingPageNav/LandingPageNav';
import LandingPageFooter from '../../components/LandingPageFooter/LandingPageFooter';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <>
      <div className="container">
      <LandingPageNav />
        <section className="mailing-list">
          <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
              <div class="col-lg-6 text-center text-lg-start">
                <h1 class="display-6 fw-bold lh-1">Sign up for early access</h1>
                <p class="col-lg-10 fs-6">We are planning to release a beta version of KnowNative by the end of 2024!</p> 
                <p class="col-lg-10 fs-6">As an early access member of KnowNative, you'll be able to create an account and build your own personalized study portal, uploading any article you'd like to learn from. Your articles, vocabulary lists and notes will all be saved so you'll never have to worry about losing your progress.</p>
                <p class="col-lg-10 fs-6">Sign up to be notified when this beta version is released for a unique opportunity to be one of KnowNative's first members!</p>
                <p className="">Feel free to reach out via email at <a href="mailto:abigaildawson.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="knownative-link">abigaildawson.dev@gmail.com</a> or check out our KnowNative <a href="https://github.com/AbigailDawson/knownative" target="_blank" rel="noopener noreferrer" className="knownative-link">GitHub</a>.</p>
              </div>
              <div class="col-md-10 mx-auto col-lg-6 mt-4">
                <form class="p-4 p-md-5 form">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control form-input" id="nameInput" placeholder="Name" />
                    <label for="nameInput">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control form-input" id="emailInput" placeholder="name@example.com" />
                    <label for="emailInput">Email address</label>
                  </div>
                  <button class="w-100 btn btn-lg sign-up mb-3" type="submit">Sign up</button>
                  <hr class="my-3 contact-hr" />
                  <small class="text-muted">KnowNative will never send you spam. Unsubscribe at any time by emailing hello@knownative.com.</small>
                </form>
                <div className="d-grid gap-2 d-sm-flex justify-content-end media-links">
                  <p className="socials">creator's social links:</p>
                  <a href="https://www.linkedin.com/in/abigaildawsondev/" className="btn btn-sm px-2 social-links"><FaLinkedin /></a>
                  <a href="https://github.com/AbigailDawson" target="_blank" rel="noopener noreferrer" className="btn btn-sm px-2 social-links"><FaGithub /></a>
                  <a href="mailto:abigaildawson.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm px-2 social-links"><MdEmail /></a>
                  <a href="https://x.com/abigailddev" target="_blank" rel="noopener noreferrer" className="btn btn-sm px-2 social-links"><FaXTwitter /></a>
                </div>
              </div>
              <hr className="contact-hr" />
            </div>
          </div>
        </section>
      <LandingPageFooter />
    </div>
  </>
  );
};