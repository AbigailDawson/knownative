import { useState } from 'react';
import './FormInput.scss';

const FormInput = (props) => {
  const { label, htmlFor, onChange, id, errorMessage, ...otherInputProps } = props;

  return (
    <div className="input-box__input-container">
      <input
        {...otherInputProps}
        id={id}
        onChange={onChange}
        placeholder=" "
        aria-describedby={`${id}-error`}
        aria-invalid={!!errorMessage}
        className="input-box__input-field"
      />
      <label className="input-box__label-container" htmlFor={htmlFor}>
        <span className="input-box__label-text">{label}</span>
      </label>
      {otherInputProps.name !== 'password' && (
        <span id={`${id}-error`} className="input-box__label-text--error" role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default FormInput;
