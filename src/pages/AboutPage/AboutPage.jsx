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
          <p>KnowNative is a language learning web application that offers a refreshing alternative to traditional textbooks by allowing learners to gather and study their own materials in one seamless platform.</p>
          <p>Learners of traditional Chinese who want to enhance their reading comprehension through immersive and personalized study experiences can do so with KnowNative. It's designed for those who want to fully engage with authentic language materials to gain a deeper understanding of how native speakers naturally communicate.</p>
          <p>KnowNative empowers learners by offering a platform where they can collect, annotate, and study their own chosen texts, all within a single intuitive interface. Featuring dynamic annotations and automatically generated flashcards from any chosen words, KnowNative puts learners in charge of their language journey.</p>
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