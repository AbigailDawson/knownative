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
          <div className="creator-container">
            <div className="creator-container-left">
              <h3 className="creator-heading">Meet Abigail, owner and creator of the KnowNative project</h3>
              <p>Hi! I'm Abigail, the creator and owner of the KnowNative project.</p>
              <p>My love for languages began with my first Japanese class in college. During my first semester, I had my first real conversation with an exchange student entirely in [broken] Japanese, and I was immediately hooked!</p>
              <p>I poured myself into my language study, traveling to Japan for a year to live with a host family and study at Waseda University. I began teaching myself Mandarin, traveling to Taipei for another year in an immersion program at National Taiwan University. Having attained advanced proficiency in both Mandarin and Japanese, I returned to the US to pursue my M.A. in Asian Studies from Georgetown University, where I immersed myself in historical research of the Japanese colonial period in Taiwan.</p>
              <p>After years of rigorous study, I stepped back from academia to seek out different experiences and figure out where exactly I could make an impact in the world. I worked with therapeutic horseback riding programs, managed a barn, traveled across the country and tutored English online. Finally, I decided to pursue a certification in software engineering to equip myself with a versatile skillset that would enable me to bring my own ideas to life through software.</p>
              <p>The concept for KnowNative began as a daydream of the language learning app I wanted to see in the world, but it's since expanded beyond how I'd ever imagined it!</p>

              
            </div>
            <div className="creator-container-right">
              <img className="abigail-taiwan" src="./images/abigail-taiwan.jpg" alt="" />
            </div>
          </div>
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
      <section className="backstory" id="backstory">
        <div>
          <h1 className="about-header">The story of KnowNative</h1>
          <div className="backstory-grid">
            <div className="backstory-grid-left">
              <h4>How it all began</h4>
              <p>The concept for KnowNative began as a daydream during a tedious Chinese study session. Like most days, I sat in front of my computer screen and manually copy-and-pasted vocabulary words from a Taiwanese news article into my dictionary app, and then transferred them one by one into my Anki flashcard deck to study.</p>
              <p>Frustrated by the tedium and inefficiency of this process, I began to imagine the language learning app I wanted to see in the world — something that would help me create my own personalized study guide, made from authentic materials that I was <i>actually interested in</i>.</p> 
              <p>My dream app would allow me to easily look up definitions, automatically generate flashcards from the words I chose, and show me full-sentence translations without ever having to leave the page. I knew a tool like this could help other people learn languages, too.</p>
            </div>
            <div className="backstory-grid-middle">
              <h4>Building KnowNative</h4>
              <p>It was a long time between learning Chinese and pursuing my certificate in software engineering, but eventually I found in my hands all the tools I'd need to create the app I'd imagined years ago.</p>
              <p>I worked tirelessly for three weeks straight to create the first version of KnowNative, which I submitted as my capstone project for my bootcamp program at General Assembly. As soon as I turned it in, I knew this was only the beginning of my dream.</p>
              <p>In April 2024, I decided to open the KnowNative project to collaborators, seeking like-minded language enthusiasts who wanted to contribute to the development of the app. I was thrilled to be joined by a self-taught UX designer and a small group of early-career software developers as excited about the project as I was.</p>
              <p>From that point on, the door was open for new contributors to join the team, and it is only with the hard work of this team that KnowNative has become what it is today.</p>
            </div>
            <div className="backstory-grid-right">
              <h4>Where we're headed</h4>
              <p>In October 2024, our team launched our new website and the KnowNative demo app - a playground for anyone to explore KnowNative and try out the features we've spent months perfecting.</p>
              <p>Now, our attention has turned to creating the <i>full KnowNative app</i>, which will allow users to create an account where they can import their own articles, save their vocabulary words and create their own personalized study experience, just like I'd envisioned back when I was immersed in language learning myself.</p>
              <p>KnowNative's development would not be possible without the support of our contributors! The KnowNative project is now completely open-source, and I encourage anyone from the community to share feature ideas, submit code and help our team make KnowNative the best it can be!</p>
            </div>
          </div>
          
        </div>
      </section>
    <LandingPageFooter />
    </div>
    </>
  );
};