import React from 'react';
import './SignupPage.css';
import { Link } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import { useState } from 'react';

const SignupPage = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  //CHANGE THIS FUNCTION FOR SIGNUP TASK #2
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <main className="signup-page-main">
      <LandingPageNav />
      <div className="signup-page">
        <div className="signup-container">
          <h1 className="">SIGN UP</h1>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="signup-email" className="signup-text">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                name="email"
                value={inputValue.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="signup-password" className="signup-text">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                name="password"
                value={inputValue.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">SIGN UP</button>
            {/* oAuth  */}
            <div>
              <button>Sign up with Google</button>
            </div>
            {/* line */}
            <div>
              <Link to="/login" className="signup-text">
                Already have an account? Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
