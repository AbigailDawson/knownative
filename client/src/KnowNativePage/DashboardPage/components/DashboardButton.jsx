import React from 'react';
import './DashboardButton.scss';

const DashboardButton = ({
  onClick,
  label,
  iconName,
  iconStyling,
  buttonVariant,
  disabled = false
}) => {
  return (
    <button
      className={`dashboard-button dashboard-button--${buttonVariant}`}
      onClick={onClick}
      disabled={disabled}>
      <span className={`material-symbols-outlined ${iconStyling}`}>{iconName}</span>
      {label}
    </button>
  );
};

export default DashboardButton;
