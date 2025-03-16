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
          <p className="about-body">KnowNative is a community-driven project that thrives on the ideas, inspiration, and expertise from our contributors. Contributors can have a major impact on the design and development direction of the project, and we greatly value the creative input and perspective of everyone who participates. <br /><br />
          Check out our <a href="https://github.com/AbigailDawson/knownative" target="_blank" ><b>GitHub repository</b></a> for instructions on how to run the project locally, and join our <a href="https://discord.gg/Rsc7TAyw3T" target="_blank"><b>Discord</b></a> to get in touch with the team, ask questions and share ideas.
          <br /><br />
          Each of the projects featured below has helped the project move forward in some meaningful way. If you're interested in participating in or leading a new design initiative, new feature or other meaningful contribution, please get in touch!</p>
        </section>
        <section className="contribution-section"> 
          <ContributionCards />
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
}
