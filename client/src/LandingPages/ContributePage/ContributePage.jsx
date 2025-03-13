import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import './ContributePage.scss';
import ContributionCards from './ContributionCards';


export default function ContributePage() {

  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="intro">
          <h1 className="about-header">Contribute to KnowNative</h1>
          <p className="about-body">KnowNative is a community-driven project that thrives on the ideas, inspiration, and expertise from our contributors. Check out our <a href="https://github.com/AbigailDawson/knownative" target="_blank" >GitHub repository</a> for instructions on how to run the project locally, find an issue & submit your work. All contributors are encouraged to join our <a href="https://discord.gg/Rsc7TAyw3T" target="_blank">Discord server</a> to get in touch with the team, ask questions and share ideas.</p>
        </section>
        <section className="contribution-section"> 
          <ContributionCards />
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
}
