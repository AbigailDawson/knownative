import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import './AboutPage.scss';

export default function AboutPage() {
  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="about-page__intro-section">
          <div>
            <h1 className="about-page__header">What is KnowNative?</h1>
            <p className="about-page__body">
              KnowNative provides a refreshing alternative to traditional textbooks, helping
              learners of traditional Chinese enhance their reading comprehension through an
              immersive and personalized study experience. By engaging with authentic language
              materials, learners gain a deeper understanding of how native speakers naturally
              communicate. With KnowNative, anyone can collect, annotate, and study their chosen
              materials, taking charge of their own learning journey.
            </p>
          </div>
        </section>
        <section className="creator__section">
          <div>
            <div className="creator__card">
              <div className="creator__card--left">
                <h3 className="creator__card--heading">
                  Meet Abigail, owner and creator of the KnowNative project
                </h3>
                <p>Hi! I&apos;m Abigail, the creator and owner of the KnowNative project.</p>
                <p>
                  My love for languages began with my first Japanese class in college. During my
                  first semester, I had my first real conversation with an exchange student entirely
                  in [broken] Japanese, and I was immediately hooked!
                </p>
                <p>
                  I poured myself into my language study, traveling to Japan for a year to live with
                  a host family and study at Waseda University. I began teaching myself Mandarin,
                  traveling to Taipei for another year in an immersion program at National Taiwan
                  University. Having attained advanced proficiency in both Mandarin and Japanese, I
                  returned to the US to pursue my M.A. in Asian Studies from Georgetown University,
                  where I immersed myself in historical research of the Japanese colonial period in
                  Taiwan.
                </p>
                <p>
                  After years of rigorous study, I stepped back from academia to seek out different
                  experiences and figure out where exactly I could make an impact in the world. I
                  worked with therapeutic horseback riding programs, managed a barn, traveled across
                  the country and tutored English online. Finally, I decided to pursue a
                  certification in software engineering to equip myself with a versatile skillset
                  that would enable me to bring my own ideas to life through software.
                </p>
                <p>
                  The concept for KnowNative began as a daydream of the language learning app I
                  wanted to see in the world, but it&apos;s since expanded beyond how I&apos;d ever
                  imagined it!
                </p>
              </div>
              <div className="creator__card--right">
                <img className="creator__img" src="./images/abigail-taiwan.jpg" alt="Picture of Abigail, smiling with arms wide open at the entrance of Huwei Fort in New Taipei, China" />
              </div>
            </div>
          </div>
        </section>

        <section className="backstory__section" id="backstory">
          <div>
            <h1 className="backstory__header">The story of KnowNative</h1>
            <div className="backstory__grid">
              <div className="backstory__card backstory__grid--left">
                <h4 className='backstory__header'>How it all began</h4>
                <p className="backstory__text">
                  The concept for KnowNative began as a daydream during a tedious Chinese study
                  session. Like most days, I sat in front of my computer screen and manually
                  copy-and-pasted vocabulary words from a Taiwanese news article into my dictionary
                  app, and then transferred them one by one into my Anki flashcard deck to study.
                </p>
                <p className="backstory__text">
                  Frustrated by the tedium and inefficiency of this process, I began to imagine the
                  language learning app I wanted to see in the world — something that would help me
                  create my own personalized study guide, made from authentic materials that I was{' '}
                  <i>actually interested in</i>.
                </p>
                <p className="backstory__text">
                  My dream app would allow me to easily look up definitions, automatically generate
                  flashcards from the words I chose, and show me full-sentence translations without
                  ever having to leave the page. I knew a tool like this could help other people
                  learn languages, too.
                </p>
              </div>
              <div className="backstory__card backstory__grid--middle">
                <h4 className='backstory__header'>Building KnowNative</h4>
                <p className="backstory__text">
                  It was a long time between learning Chinese and pursuing my certificate in
                  software engineering, but eventually I found in my hands all the tools I&apos;d
                  need to create the app I&apos;d imagined years ago.
                </p>
                <p className="backstory__text">
                  I worked tirelessly for three weeks straight to create the first version of
                  KnowNative, which I submitted as my capstone project for my bootcamp program at
                  General Assembly. As soon as I turned it in, I knew this was only the beginning of
                  my dream.
                </p>
                <p className="backstory__text">
                  In April 2024, I decided to open the KnowNative project to collaborators, seeking
                  like-minded language enthusiasts who wanted to contribute to the development of
                  the app. I was thrilled to be joined by a self-taught UX designer and a small
                  group of early-career software developers as excited about the project as I was.
                </p>
                <p className="backstory__text">
                  From that point on, the door was open for new contributors to join the team, and
                  it is only with the hard work of this team that KnowNative has become what it is
                  today.
                </p>
              </div>
              <div className="backstory__card backstory__grid--right">
                <h4 className='backstory__header'>Where we&apos;re headed</h4>
                <p className="backstory__text">
                  In October 2024, our team launched our new website and the KnowNative demo app - a
                  playground for anyone to explore KnowNative and try out the features we&apos;ve
                  spent months perfecting.
                </p>
                <p className="backstory__text">
                  Now, our attention has turned to creating the <i>full KnowNative app</i>, which
                  will allow users to create an account where they can import their own articles,
                  save their vocabulary words and create their own personalized study experience,
                  just like I&apos;d envisioned back when I was immersed in language learning
                  myself.
                </p>
                <p className="backstory__text">
                  KnowNative&apos;s development would not be possible without the support of our
                  contributors! The KnowNative project is now completely open-source, and I
                  encourage anyone from the community to share feature ideas, submit code and help
                  our team make KnowNative the best it can be!
                </p>
              </div>
            </div>
          </div>
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
}
