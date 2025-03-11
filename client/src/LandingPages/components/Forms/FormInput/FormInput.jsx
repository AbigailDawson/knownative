import { useState } from 'react';
import './FormInput.scss';

/**
 * Form Input for login/signup flow.
 *
 * This component renders an input field with validation and error message display.
 * It should be used within a form, where the following props and functions are required:
 *
 * Required Functions and Props:
 * - handleChange, handleBlur, and formFields
 */

const FormInput = (props) => {
  const { label, onChange, htmlFor, id, errorInputMessage, handleBlur, ...otherInputProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  const inputType = label.toLowerCase().includes('password')
    ? showPassword
      ? 'text'
      : 'password'
    : otherInputProps.type || 'text';

  return (
    <div className={`input-box__input-container ${errorInputMessage ? 'has-error' : ''}`}>
      <input
        {...otherInputProps}
        id={id}
        onChange={onChange}
        type={inputType}
        placeholder=" "
        onBlur={handleBlur}
        aria-describedby={`${id}-error`}
        aria-invalid={!!errorInputMessage}
        className={`input-box__input-field ${errorInputMessage ? 'has-error' : ''}`}
      />
      <label className="input-box__label-container" htmlFor={htmlFor}>
        <span className="input-box__label-text">{label}</span>
      </label>

      {/* If the input is a password field, include the visibility icon & functionality */}
      {otherInputProps.name.toLowerCase().includes('password') ? (
        <span
          className="input-box__icon material-symbols-outlined"
          onClick={() => setShowPassword(!showPassword)}>
        </span>
      ) : null}

      {/* Show error symbol if the input is not a password and input is invalid */}
      {otherInputProps.name !== 'password' && (
        <div id={`${id}-error`} className="input-box__label-text--error" role="alert">
          <img
            className="input-box__error-symbol"
            src="/images/error_note.svg"
            alt="error symbol"
          />
          <span>{errorInputMessage}</span>
        </div>
      )}
    </div>
  );
};

export default FormInput;
