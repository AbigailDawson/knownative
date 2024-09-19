import LandingPageNav from '../../components/LandingPageNav/LandingPageNav';
import LandingPageFooter from '../../components/LandingPageFooter/LandingPageFooter';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import './ContactPage.css';

export default function ContactPage() {
  return (
    <>
      <div className="container">
      <LandingPageNav />
        <section className="mailing-list">
          <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">
              <div class="col-md-10 mx-auto col-lg-6 mt-4 pe-5">
                <h1 class="display-6 fw-bold lh-1 mb-4">Get in touch</h1>
                <p className="">Questions about KnowNative? Feel free to reach out via email at <a href="mailto:abigaildawson.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="knownative-link">abigaildawson.dev@gmail.com</a> or check out our <a href="https://github.com/AbigailDawson/knownative" target="_blank" rel="noopener noreferrer" className="knownative-link">GitHub</a>.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-center media-links mb-5">
                  <a href="https://www.linkedin.com/in/abigaildawsondev/" className="btn btn-sm px-2 social-links"><FaLinkedin /></a>
                  <a href="https://github.com/AbigailDawson" target="_blank" rel="noopener noreferrer" className="btn btn-sm px-2 social-links"><FaGithub /></a>
                  <a href="mailto:abigaildawson.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm px-2 social-links"><MdEmail /></a>
                  <a href="https://x.com/abigailddev" target="_blank" rel="noopener noreferrer" className="btn btn-sm px-2 social-links"><FaXTwitter /></a>
                </div>
              </div>
              <div class="col-lg-6 text-center d-flex flex-column align-items-center text-lg-start early-access">
                <h3 class="fw-bold lh-1">Sign up for early access</h3>
                <iframe class="early-access-form my-4" title="early-access-form" src="https://embeds.beehiiv.com/512b2f32-1ccd-4254-b0ef-9514515f60d6?slim=true" data-test-id="beehiiv-embed" height="52" frameborder="0" scrolling="no" ></iframe>
                <p class="col-lg-12 fs-6 text-center">We're planning to release a beta version of KnowNative by spring of 2025!</p> 
                <p class="col-lg-12 fs-6 text-center">As a member, you'll be be able to <strong>build your own personalized study portal</strong> with your own imported articles. Everything will be saved so you'll never have to worry about losing your notes.</p>
                <p class="col-lg-12 fs-6 text-center">Sign up to be notified when this beta version is released for a unique opportunity to be one of KnowNative's first members.</p>
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