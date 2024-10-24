import React from 'react';
import './SignupPage.css';
import { Link } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import { useState } from 'react';
import FormInput from '../components/Forms/FormInput'
import { MdAlternateEmail } from "react-icons/md";
import { TbPencilCheck } from "react-icons/tb";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";

const SignupPage = () => {
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Add more form fields as needed here:
  const formFields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      id: "signup-firstName",
      htmlFor: "signup-firstName",
      errorMessage: "First name needs to be 2 to 20 characters long and shouldn't contain special characters.",
      pattern: "^[A-Za-z]{2,20}$",
      icon: <TbPencilCheck />,
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      id: "signup-lastName",
      htmlFor: "signup-lastName",
      errorMessage: "Last name needs to be 2 to 20 characters long and shouldn't contain special characters.",
      pattern: "^[A-Za-z]{2,20}$",
      icon: <TbPencilCheck />,
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      id: "signup-email",
      htmlFor: "signup-email",
      errorMessage: "Please use a valid email address.",
      icon: <MdAlternateEmail />,
      required: true,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      id: "signup-password",
      htmlFor: "signup-password",
      errorMessage: "Password should be 6-20 characters. Include letters, numbers and at least one special character.",
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,20}$",
      icon: <RiLockPasswordFill />,
      required: true,
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      id: "signup-confirmPassword",
      htmlFor: "signup-confirmPassword",
      errorMessage: "Passwords do not match",
      pattern: inputValue.password,
      icon: <RiLockPasswordFill />,
      required: true,
    },
  ]
  
  const handleChange = (e) => {
    setInputValue({...inputValue, [e.target.name]: e.target.value});
  };

  //CHANGE THIS FUNCTION FOR SIGNUP TASK #2
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <main className="signup-page-main">
      <LandingPageNav />
      <section className="signup-page">
        <div className="signup-container">
          <h1 className="">SIGN UP</h1>
          <form className="form-container" onSubmit={handleSubmit}>
            {formFields.map((input, idx) => (
              <FormInput 
              key={idx} 
              {...input} 
              value={inputValue[formFields.name]} 
              onChange={handleChange}/>
            ))}
            <button type="submit">
              <FaUserPlus /><span> &nbsp; SIGN UP</span>
            </button>
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
      </section>
    </main>
  );
};

export default SignupPage;
