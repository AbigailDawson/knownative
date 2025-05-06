import React, { useState } from 'react';
import Button from '../../ui-components/Button/button';
import sendRequest from '../../utilities/send-request';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import './AddTextSlideout.scss';

export default function AddTextSlideout({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    source: '',
    title: '',
    content: ''
  });

  const [errors, setErrors] = useState({});
  const { user } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Function to validate form data before submission.
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = '⚠️ Please enter a title';
    }
    if (!formData.content.trim()) {
      newErrors.content = '⚠️ Please paste in a text';
    }
    if (formData.source && !isValidUrl(formData.source)) {
      newErrors.source = '⚠️ The source must be a URL';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const data = await sendRequest('/api/demo/texts', 'POST', formData);
        console.log('Text added:', data);
        onClose(); // Close the slideout after successful submission
      } catch (error) {
        console.error('Oops! Error submitting form:', error);
      }
    }
  };

  return (
    <div className={`add-text-slideout ${isOpen ? 'open' : ''}`}>
      <div className="add-text-slideout__content">
        <div className="add-text-slideout__form-group">
          <button className="add-text-slideout__close" onClick={onClose}>
            x
          </button>
        </div>
        <div className="add-text-slideout__header">
          <h1 className="add-text-slideout__title">Add a new text</h1>
          <p className="add-text-slideout__subtitle">
            Provide the details for your text below to save it to your dashboard.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={`add-text-slideout__form-group ${errors.title ? 'has-error' : ''}`}>
            <label htmlFor="title">Title*</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter a title for the text..."
              value={formData.title}
              onChange={handleChange}
              required
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <div className="error-message">{errors.title}</div>}
          </div>
          <div className={`add-text-slideout__form-group ${errors.source ? 'has-error' : ''}`}>
            <label htmlFor="source">Source</label>
            <input
              type="text"
              id="source"
              name="source"
              placeholder="Enter the URL of the text..."
              value={formData.source}
              onChange={handleChange}
              required
              className={errors.source ? 'error' : ''}
            />
            {errors.source && <div className="error-message">{errors.source}</div>}
          </div>
          <div className={`add-text-slideout__form-group ${errors.content ? 'has-error' : ''}`}>
            <label htmlFor="content">Content*</label>
            <textarea
              id="content"
              name="content"
              placeholder="Paste in a text you would like to read..."
              value={formData.content}
              onChange={handleChange}
              required
              className={errors.content ? 'error' : ''}
            />
            {errors.content && <div className="error-message">{errors.content}</div>}
          </div>
          <div className="add-text-slideout__buttons">
            <Button buttonText="Save" buttonOnClickFunc={handleSubmit} buttonVariant="primary" />
          </div>
        </form>
      </div>
    </div>
  );
}
