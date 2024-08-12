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
          <h1>Core Contributors</h1>
          <div className="contributor-container">
            <div>
              <a href="https://imgur.com/i3sxWLD"><img src="https://i.imgur.com/i3sxWLDb.png" title="source: imgur.com" /></a>
              <p id="contributor-name">Core Contributor 1</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <a href="https://imgur.com/i3sxWLD"><img src="https://i.imgur.com/i3sxWLDb.png" title="source: imgur.com" /></a>
              <p id="contributor-name">Core Contributor 2</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <a href="https://imgur.com/i3sxWLD"><img src="https://i.imgur.com/i3sxWLDb.png" title="source: imgur.com" /></a>
              <p id="contributor-name">Core Contributor 3</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <a href="https://imgur.com/i3sxWLD"><img src="https://i.imgur.com/i3sxWLDb.png" title="source: imgur.com" /></a>
              <p id="contributor-name">Core Contributor 4</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <a href="https://imgur.com/i3sxWLD"><img src="https://i.imgur.com/i3sxWLDb.png" title="source: imgur.com" /></a>
              <p id="contributor-name">Core Contributor 5</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <a href="https://imgur.com/i3sxWLD"><img src="https://i.imgur.com/i3sxWLDb.png" title="source: imgur.com" /></a>
              <p id="contributor-name">Core Contributor 6</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <a href="https://imgur.com/i3sxWLD"><img src="https://i.imgur.com/i3sxWLDb.png" title="source: imgur.com" /></a>
              <p id="contributor-name">Core Contributor 7</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <a href="https://imgur.com/i3sxWLD"><img src="https://i.imgur.com/i3sxWLDb.png" title="source: imgur.com" /></a>
              <p id="contributor-name">Core Contributor 8</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div>
              <a href="https://imgur.com/i3sxWLD"><img src="https://i.imgur.com/i3sxWLDb.png" title="source: imgur.com" /></a>
              <p id="contributor-name">Core Contributor 9</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
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