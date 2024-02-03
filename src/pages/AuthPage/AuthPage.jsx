import './AuthPage.css'
import { useState } from 'react'
import SignUpFormFunc from '../../components/SignUpFormFunc/SignUpFormFunc'
import LogInForm from '../../components/LogInForm/LogInForm'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { PiBooksDuotone } from "react-icons/pi";
import { GiRead } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
import { TbCardsFilled } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";


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
              <h1>Elevate Your Language Skills <br></br>by Reading Native Texts</h1>
              <p>Ditch the textbooks and generic courses!</p>
              <p>Take charge of your own learning experience by reading <span className="emphasize">authentic native texts</span> from anywhere that piques your interest.</p>
              <p>Immerse yourself in <span className="emphasize">real-life language</span> and discover the beauty of traditional Chinese through the written words of native speakers.</p>
              <div className="auth-btns">
              <Stack direction="row" spacing={2}>
                <Button
                  size="large"
                  onClick={() => setShowLogin(!showLogin)}
                  sx={{
                    color: 'teal',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.3s, color 0.3s',
                    '&:hover': {
                      backgroundColor: 'var(--off-white)',
                      color: 'var(--red-brick)',
                    },
                  }}
                >
                  LOG IN
                </Button>
                <Button
                  size="large"
                  onClick={() => setShowSignup(!showSignup)}
                  sx={{
                    color: 'teal',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.3s, color 0.3s',
                    '&:hover': {
                      backgroundColor: 'var(--off-white)',
                      color: 'var(--red-brick)',
                    },
                  }}
                >
                  SIGN UP
                </Button>
              </Stack>
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
              <GiRead className="why-icon" />
              <Typography variant="h5" component="div" className="why-card-title">
                Authentic Learning
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
                Say goodbye to scattered bookmarks and multiple apps. KnowNative centralizes your <span className="emphasize">articles</span>, <span className="emphasize">notes</span>, <span className="emphasize">translations</span>, and <span className="emphasize">flashcards</span> in one place, streamlining your learning process.
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
            <p>Enhance your reading comprehension by <span className="emphasize">clicking on words</span> to unveil their pronunciation and meaning. Save them to <span className="emphasize">transform into flashcards</span> and <span className="emphasize">inline annotations</span> for a personalized study guide.</p>
            <h4><TbCards className="feature-icon" />Flashcard Decks Tailored for You</h4>
            <p>Study from a <span className="emphasize">customized deck of flashcards</span> automatically generated from your own saved words — the perfect way to reinforce your understanding of the text and commit new vocabulary to memory.</p>
            <h4><IoLanguage className="feature-icon" /> Uncover Full Sentence Translations</h4>
            <p>Grasp the context with <span className="emphasize">sentence translations</span> at your fingertips. Challenge yourself by showing and hiding translations to test your true understanding of the material.</p>
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