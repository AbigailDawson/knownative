import React, { useState } from 'react';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../LandingPages/components/Forms/FormInput/FormInput';
import Button from '../../ui-components/Button/button';
import sendRequest from '../../utilities/send-request';
import './AddTextPage.scss';

export default function AddTextPage() {
  const [formData, setFormData] = useState({
    source: '',
    title: '',
    content: ''
  });

  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await sendRequest('/api/demo/texts', 'POST', formData, {
        Authorization: `Bearer ${user.token}`
      });
  
      console.log('Text added:', data);
      // Temporarily redirecting to the dashboard after successfully adding a text.
      navigate('/dashboard');
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Oops! Error submitting form:', error);
    }
  };

  async function handleLogOut() {
    try {
      await authService.logOut();
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error(error.message);
      alert('There was an issue logging out. Please try again.');
    }
  }

  return user ? (
    <div className="dashboard">
      <div className="dashboard__side-nav">
        <div className="dashboard__side-nav-links-container">
          <a href="../" className="dashboard__logo-container">
            <img src="/images/square-logo.png" alt="KnowNative logo." className="dashboard__logo" />
            <h4>KnowNative</h4>
          </a>
          <ul className="dashboard__nav-links">
            <li className="dasboard__nav-item">
              <a className="dashboard__link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="dasboard__nav-item">
              <a className="dashboard__link" href="/">
                Cards
              </a>
            </li>
            <li className="dasboard__nav-item">
              <a className="dashboard__link" href="/">
                Library
              </a>
            </li>
            <li className="dasboard__nav-item">
              <a className="dashboard__link" href="/">
                Progress
              </a>
            </li>
            <li className="dasboard__nav-item">
              <a className="dashboard__link" href="/">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="dashboard__nav-footer">
          <ul className="dashboard__nav-links">
            <li className="dasboard__nav-item">
              <button className="dashboard__link" onClick={handleLogOut}>
                Logout
              </button>
            </li>
            <li className="dasboard__nav-item">
              <a className="dashboard__link" href="/">
                GitHub
              </a>
            </li>
            <li className="dasboard__nav-item">
              <a className="dashboard__link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__user-info">
          <button className='dashboard__user-dropdown-options'>
            <p className='dashboard__user-name'>{user.username}</p>
            <img
              className="dashboard__user-profile-pic"
              src="/images/square-logo.png"
              alt="User profile picture."
            />
            <p className="dashboard__user-dropdown-icon">┕</p>
          </button>
        </div>
        <div className="add-text-form">
          <h1 className='add-text-form__title'>Import Text</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
                label="Title"
                htmlFor="title"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            <FormInput
              label="Source"
              htmlFor="source"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Content"
              htmlFor="content"
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              as="textarea"
            />
            <div className="add-text-form__buttons">
                <Button
                className="test"
                buttonText="Submit"
                buttonOnClickFunc={handleSubmit}
                buttonVariant="primary"
                />
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p>
        User not logged in. Please log in <Link to="/login">here</Link>.
      </p>
    </div>
  );
}