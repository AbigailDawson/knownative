import React from 'react';
import './button.css';

const Button = ({ buttonText, buttonOnClickFunc, buttonVariant }) => {
  /*
Button Variants:
   - primary: First priority button. Call To Action(cta): Submit, Complete, Continue. Solid color
   - secondary: Second priority button.
   - tertiary: Third priority button. No border or color, just text
   - danger: A warning. Used sparingly for distructive cta's: Delete, Remove, Exit without Saving. Possible refactor to consider severity.
*/

  return (
    <button className={`reusable-button ${buttonVariant}-button`} onClick={buttonOnClickFunc}>
      {buttonText}
    </button>
  );
};

export default Button;
