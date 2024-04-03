import './AuthPage.css'
import { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LogInForm from '../../components/LogInForm/LogInForm'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { PiBooksDuotone } from "react-icons/pi";
import { GiRead } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function AuthPage({setUser}) {

  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  function handleGoBack() {
    setShowLogin(false)
    setShowSignup(false)
  }

  return (
    <main className="landing-page">

      <section className="hero" id="top">
        <div className="hero-left">
          <img src="/images/knlogo1.png" alt="KnowNative Logo" style={{width: '100%'}} />
        </div>
        <div className="hero-right">
          
          {!showLogin && !showSignup ? (
            <>
              <h1>Elevate Your Language Skills <br></br>by Reading Native Texts</h1>
              <p>Ditch the textbooks and generic courses!</p>
              <p>Take charge of your own learning experience by reading <span className="emphasize">authentic native texts</span> from anywhere that piques your interest.</p>
              <p>Immerse yourself in <span className="emphasize">real-life language</span> and discover the beauty of traditional Chinese through the written words of native speakers.</p>
              <div className="auth-btns">
                <button className="login-btn" onClick={() => setShowLogin(!showLogin)}>
                  LOG IN
                </button>
                <button className="login-btn" onClick={() => setShowSignup(!showSignup)}>
                  SIGN UP
                </button>
                <a href="/demo"><button className="login-btn">DEMO</button></a>
              </div>
            </>
          ) : (
            <>
            { showLogin && (
              <>
                <IoMdArrowRoundBack className="back-btn" onClick={handleGoBack} />
                <LogInForm setUser={setUser} />
              </>
            )}
            { showSignup && (
              <>
                <IoMdArrowRoundBack className="back-btn" onClick={handleGoBack} />
                <SignUpForm setUser={setUser} />
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
              <GiRead className="why-icon" />
              <Typography variant="h5" component="div" className="why-card-title">
                Authentic Reading
              </Typography>
              <Typography variant="body2" className="why-card-content">
                Experience the language in its true form. Dive into texts chosen by you to grasp real grammatical patterns and vocabulary <span className="emphasize">used by native speakers</span>.
              </Typography>
            </CardContent>
          </Card>
          <Card className="why-card">
            <CardContent>
              <PiBooksDuotone className="why-icon" />
              <Typography variant="h5" component="div" className="why-card-title">
                Meaningful Content
              </Typography>
              <Typography variant="body2" className="why-card-content">
                  Fuel your learning journey with content that <span className="emphasize">captivates</span> you. Reading about <span className="emphasize">topics you love</span> keeps you engaged, making your language learning experience enjoyable and sustainable.
              </Typography>
            </CardContent>
          </Card>
          <Card className="why-card">
            <CardContent>
              <MdDashboard className="why-icon" />
              <Typography variant="h5" component="div" className="why-card-title">
                All-in-One Learning Hub
              </Typography>
              <Typography variant="body2" className="why-card-content">
                Say goodbye to scattered bookmarks and multiple apps! KnowNative centralizes your <span className="emphasize">articles</span>, <span className="emphasize">notes</span>, <span className="emphasize">translations</span>, and <span className="emphasize">flashcards</span> in one place, so you can focus on learning.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-txt">
            <h1>Customize Your Learning Journey</h1>
            <h4><FaPencilAlt className="feature-icon" />Annotate Your Way</h4>
            <p>Enhance your reading comprehension by <span className="emphasize">clicking on words</span> to reveal their pronunciation and meaning. Save them to <span className="emphasize">transform into flashcards</span> and <span className="emphasize">inline annotations</span> for a personalized study guide.</p>
            <h4><TbCards className="feature-icon" />Flashcard Decks Tailored for You</h4>
            <p>Study from a <span className="emphasize">customized deck of flashcards</span> automatically generated from your own saved words — the perfect way to reinforce your understanding of the text and commit new vocabulary to memory.</p>
            <h4><IoLanguage className="feature-icon" /> Reveal Full Sentence Translations</h4>
            <p>Solidify your understanding with <span className="emphasize">sentence translations</span> at your fingertips. Challenge yourself by showing and hiding translations to test your true understanding of the material.</p>
          </div>
          <img className="feature-img" src="/images/kn-runthru.gif" alt="gif demonstrating app features" style={{width: '100%'}} />
        </div>
      </section>

      <section className="gpt-demo">
        <h1>Leverage the Power of AI</h1>
        <p>Struggling with complex texts? KnowNative leverages <span className="emphasize">OpenAI technology</span> to generate an easier version of your text at a lower reading level, to help you <span className="emphasize">level up your reading comprehension</span> without settling for dull textbook passages.</p>
        <img className="gpt-demo-img" src="/images/kn-openai-screenshot.png" alt="Screenshot of annotations feature" style={{width: '80%'}} />
      </section>

      <section className="signup-offer">
        <h1>Ready to Elevate Your Language Learning?</h1>
        <p>Sign up for free today to embark on a journey to enhance your reading skills through authentic native texts!</p>
        <a href="#top" style={{ textDecoration: 'none' }}>
          <Button
            size="large"
            onClick={() => setShowSignup(!showSignup)}
            sx={{
              color: 'teal',
              backgroundColor: 'white',
              transition: 'background-color 0.3s, color 0.3s',
              '&:hover': {
                backgroundColor: 'white',
                color: 'var(--red-brick)',
              },
            }}
          >
            SIGN UP
          </Button>  
        </a>    
      </section>

    </main>
  )
}