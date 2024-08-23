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
          <h1 className="about-header">What is KnowNative?</h1>
          <p className="about-body">KnowNative provides a refreshing alternative to traditional textbooks, helping learners of traditional Chinese enhance their reading comprehension through an immersive and personalized study experience. By engaging with authentic language materials, learners gain a deeper understanding of how native speakers naturally communicate. With KnowNative, anyone can collect, annotate, and study their chosen materials, taking charge of their own learning journey.</p>
        </div>
      </section>
      <section className="creator">
        <div>
          <h1 className="about-header">The creator</h1>
          <p className="about-body">Abigail's bio here.</p>
        </div>
      </section>
      <section className="core-contributors">
        <div>
          <h1 className="about-header">Core Contributors</h1>
          <p className="about-body">Each contributor should write a short paragraph bio and provide links to any social media accounts and image they would like to be included.</p>
        </div>
      </section>
      <section className="how-to-contribute">
        <h1 className="about-header">How to contribute</h1>
        <p className="about-body">KnowNative is a community-driven project that thrives on the ideas, inspiration and expertise from our contributors. We're eager to collaborate with community members skilled in software development, UX/UI design, graphic art and illustration, branding, copywriting and content creation. If you have an interest in linguistics or language study, we invite you to join us in shaping KnowNative's development!</p>
        <p className="about-body">There are two ways to contribute to the KnowNative project:</p>
        <ul>
          <li>
            <span className="li-header">Contribute to the open source project</span>
            Software developers are welcome to contribute code to the project! Any kind of contribution is meaningful, whether it's a few lines of CSS to improve some styling or an entirely new feature. To contribute to the open source project, follow the instructions on <a href="https://github.com/AbigailDawson/knownative" target="_blank" rel="noreferrer">GitHub</a> to run KnowNative locally, create your own branch and submit a pull request!
          </li>
          <li>
            <span className="li-header">Become a Core Contributor</span>
            Core Contributors are involved in the long-term creative vision for the KnowNative project. We work together as a team to plan and implement new features and improve the app experience for our users. Core Contributors commit to participating in regular team meetings and contribute to the project on a regular consistent basis. If you're interested in becoming a Core Contributor, please reach out to Abigail on <a href="https://www.linkedin.com/in/abigaildawsondev/" target="_blank" rel="noreferrer">LinkedIn</a>.
          </li>
        </ul>
      </section>
      <section className="backstory">
        <div>
          <h1 className="about-header">The story behind KnowNative</h1>
          <p className="about-body">Longer description of how KnowNative came to be.</p>
        </div>
      </section>
    <LandingPageFooter />
    </div>
    </>
  );
};