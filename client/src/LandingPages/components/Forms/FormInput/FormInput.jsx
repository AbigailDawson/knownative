import { useState } from 'react';
import './FormInput.scss';

const FormInput = (props) => {
  const { label, htmlFor, onChange, id, errorInputMessage, handleBlur, ...otherInputProps } = props;

  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

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

      {label.toLowerCase().includes('password') ? (
        <span
          className="input-box__icon material-symbols-outlined"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'visibility_off' : 'visibility'}
        </span>
      ) : null}
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
