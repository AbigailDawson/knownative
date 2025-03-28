import React from 'react';
import './radio.scss';

const Radio = ({ value, id, checked, onChange, className = '' }) => {
  return (
    <input
      type="radio"
      value={value}
      id={id}
      checked={checked}
      onChange={onChange}
      className={`radio-input ${className}`}
    />
  );
};

export default Radio;
