import React, { useState } from 'react';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../LandingPages/components/Forms/FormInput';
import Button from '../../ui-components/Button/button';
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // Example:
    // const response = await fetch('/api/texts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${user.token}`
    //   },
    //   body: JSON.stringify(formData)
    // });
    // const data = await response.json();
    // if (response.ok) {
    //   navigate('/texts');
    // } else {
    //   console.error('Error adding text:', data.error);
    // }

    // For now, let's simulate the success and redirect to the dashboard page
    navigate('/dashboard');
    console.log('Form submitted:', formData);
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
            <Button
              buttonText="Submit"
              buttonOnClickFunc={handleSubmit}
              buttonVariant="primary"
            />
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