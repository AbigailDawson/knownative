import './AuthPage.css'
import { useState } from 'react'
import SignUpFormFunc from '../../components/SignUpFormFunc/SignUpFormFunc'
import LogInForm from '../../components/LogInForm/LogInForm'

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
          <img src="" alt="Hero Image" />
        </div>
        <div className="hero-right">
          
          {!showLogin && !showSignup ? (
            <>
              <h1>Unlock the Power of Native Texts</h1>
              <h4>Ditch the textbooks and generic courses! With KnowNative, you have the freedom to tailor your own learning experience by reading texts from anywhere that piques your interest. Immerse yourself in real-life language usage and discover the beauty of traditional Chinese through the written words of native speakers.</h4>
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
    </main>
  )
}