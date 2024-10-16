import React from 'react'
import './SignupPage.css'

const SignupPage = () => {
  return (
    <main>
        <div className="signup-container signup-text">
            <h1 className=''>SIGN UP</h1>
            <form className="form-container" onSubmit={() => console.log("submit")}>
                <div className="">
                    <label htmlFor="signup-email">Email</label>
                    <input id="signup-email" type="text" />
                </div>
                <div>
                    <label htmlFor="signup-password">Password</label>
                    <input id="signup-password" type="text" />
                </div>
                <button>
                    SIGN UP
                </button>
                {/* line */}
                <div></div>
                 {/* oAuth  */}
            </form>
        </div>
    </main>
  )
}

export default SignupPage