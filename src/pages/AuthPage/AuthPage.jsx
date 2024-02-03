import './AuthPage.css'
import { useState } from 'react'
import SignUpFormFunc from '../../components/SignUpFormFunc/SignUpFormFunc'
import LogInForm from '../../components/LogInForm/LogInForm'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function AuthPage({setUser}) {

  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  function handleGoBack() {
    setShowLogin(false)
    setShowSignup(false)
  }

  return (
    <main className="landing-page">

      <section className="hero">
        <div className="hero-left">
          <img src="/images/knlogo1.png" alt="KnowNative Logo Image" style={{width: '100%'}} />
        </div>
        <div className="hero-right">
          
          {!showLogin && !showSignup ? (
            <>
              <h1>Elevate Your Language Skills by Reading Native Texts</h1>
              <p>Ditch the textbooks and generic courses! With KnowNative, you take charge of your own learning experience by reading authentic native texts from anywhere that piques your interest. Immerse yourself in real-life language usage and discover the beauty of traditional Chinese through the written words of native speakers.</p>
              <div className="auth-btns">
                <button onClick={() => setShowLogin(!showLogin)}>Log In</button>
                <button onClick={() => setShowSignup(!showSignup)}>Sign Up</button>
              </div>
            </>
          ) : (
            <>
            { showLogin && (
              <>
                <h1>Log In</h1>
                <button onClick={handleGoBack}>Back</button>
                <LogInForm setUser={setUser} />
              </>
            )}
            { showSignup && (
              <>
                <h1>Sign Up</h1>
                <button onClick={handleGoBack}>Back</button>
                <SignUpFormFunc setUser={setUser} />
              </>
            )}
          </>
          )}
        </div>
      </section>

      <section className="why">
        <h1>Why KnowNative?</h1>
        <div className="why-cards">
          <Card className="why-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Authentic Learning
              </Typography>
              <Typography variant="body2">
                Experience the language in its true form. Dive into texts chosen by you to grasp real grammatical patterns and vocabulary used by native speakers.
              </Typography>
            </CardContent>
          </Card>
          <Card className="why-card">
            <CardContent>
              <Typography variant="h5" component="div">
                Meaningful Content
              </Typography>
              <Typography variant="body2">
                  Fuel your learning journey with content that captivates you. Reading about topics you love keeps you engaged, making your language learning experience enjoyable and sustainable.
              </Typography>
            </CardContent>
          </Card>
          <Card className="why-card">
            <CardContent>
              <Typography variant="h5" component="div">
                All-in-One Learning Hub
              </Typography>
              <Typography variant="body2">
                Say goodbye to scattered bookmarks and multiple apps. KnowNative centralizes your articles, notes, translations, and flashcards in one place, streamlining your learning process.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="features">
        <h1>Elevate Your Learning Journey</h1>
        <div className="feature">
          <div className="feature-txt">
            <h4>Annotate Your Way</h4>
            <p>Enhance your reading comprehension by clicking on words to unveil their pronunciation and meaning. Save them to transform into flashcards and inline annotations for a personalized study guide.</p>
            <h4>Flashcard Decks Tailored for You</h4>
            <p>Study from a customized deck of flashcards automatically generated from your own saved words — the perfect way to reinforce your understanding of the text and commit new vocabulary to memory.</p>
            <h4>Uncover Full Sentence Translations</h4>
            <p>Grasp the context with sentence translations at your fingertips. Challenge yourself by showing and hiding translations to test your true understanding of the material.</p>
          </div>
          <img className="feature-img" src="/images/annotations.png" alt="Screenshot of annotations feature" style={{width: '100%'}} />
        </div>
      </section>

      <section className="gpt-demo">
        <h1>Leverage the Power of AI</h1>
        <p>Struggling with complex texts? KnowNative leverages OpenAI to generate an easier version at a lower reading level, to help you level up your reading comprehension without compromising authenticity.</p>
        <img className="gpt-demo-img" src="/images/annotations.png" alt="Screenshot of annotations feature" style={{width: '80%'}} />
      </section>

      <section className="signup-offer">
        <h1>Ready to Elevate Your Language Learning?</h1>
        <p>Sign up for free today to embark on a journey to enhance your reading skills through authentic native texts!</p>
        <button onClick={() => setShowSignup(!showSignup)}>Sign Up</button>
      </section>

    </main>
  )
}