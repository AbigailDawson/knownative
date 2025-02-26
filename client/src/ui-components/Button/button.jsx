import React from 'react';
import './button.scss';

const Button = ({
  buttonText,
  buttonOnClickFunc,
  buttonVariant,
  disabled = false,
  iconName,
  iconStyling,
  textSize
}) => {
  /*
Button Variants:
   - primary: First priority button. Call To Action(cta): Submit, Complete, Continue. Solid color
   - secondary: Second priority button.
   - tertiary: Third priority button. No border or color, just text
   - danger: A warning. Used sparingly for distructive cta's: Delete, Remove, Exit without Saving. Possible refactor to consider severity.
*/

  return (
    <button
      className={`reusable-button reusable-button--${buttonVariant} ${textSize}`}
      onClick={buttonOnClickFunc}
      disabled={disabled}>
      {iconName && (
        <span className={`material-symbols-outlined button__icon ${iconStyling}`}>{iconName}</span>
      )}
      {buttonText}
    </button>
  );
};

export default Button;
