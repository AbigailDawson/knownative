import { useState } from 'react';
import './FormInput.scss';

const FormInput = (props) => {
  const { label, htmlFor, onChange, id, errorMessage, ...otherInputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input-box__input-container has-error">
      <input
        {...otherInputProps}
        id={id}
        onChange={onChange}
        placeholder=" "
        onBlur={handleFocus}
        onFocus={() => otherInputProps.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
        aria-describedby={`${id}-error`}
        aria-invalid={!!errorMessage}
        className="input-box__input-field"
      />
      <label className="input-box__label-container" htmlFor={htmlFor}>
        <span className="input-box__label-text">{label}</span>
      </label>
      {otherInputProps.name !== 'password' && (
        <div id={`${id}-error`} className="input-box__label-text--error" role="alert">
          <img
            className="input-box__error-symbol"
            src="/images/error_note.svg"
            alt="error symbol"
          />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default FormInput;
