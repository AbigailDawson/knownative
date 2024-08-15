import LandingPageNav from '../../components/LandingPageNav/LandingPageNav';
import LandingPageFooter from '../../components/LandingPageFooter/LandingPageFooter';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <>
    <div className="container">
    <LandingPageNav />
      <section className="intro">
        <div>
          <h1>What is KnowNative?</h1>
          <p>Short description of the app, who it's for and what its purpose is.</p>
        </div>
      </section>
      <section className="creator">
        <div>
          <h1>The Creator</h1>
          <p>Abigail's bio here.</p>
        </div>
      </section>
      <section className="core-contributors">
        <div>
          <h1>Core Contributors</h1>
          <p>Each contributor should write a short paragraph bio and provide links to any social media accounts and image they would like to be included.</p>
        </div>
      </section>
      <section className="how-to-contribute">
        <div>
          <h1>How to contribute</h1>
          <p>Two options: contribute to the open-source repository or become a Core Contributor.</p>
        </div>
      </section>
      <section className="backstory">
        <div>
          <h1>The story behind KnowNative</h1>
          <p>Longer description of how KnowNative came to be.</p>
        </div>
      </section>
    <LandingPageFooter />
    </div>
    </>
  );
};