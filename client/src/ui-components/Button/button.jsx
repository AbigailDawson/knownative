import React, { useRef, useEffect } from 'react';
import './button.css';

const Button = ({ buttonText, buttonOnClickFunc, buttonVariant }) => {
  /*
Button Variants:
   - primary: First priority button. Call To Action(cta): Submit, Complete, Continue. Solid color
   - secondary: Second priority button. Outline/Border same color as Primary
   - tertiary: Third priority button. No border or color, just text
   - danger: A warning. Used sparingly for distructive CTA's: Delete, Remove, Exit without Saving. Possible refactor to consider severity.
*/

  console.log(buttonVariant);

  return (
    <button className={`reusable-button ${buttonVariant}-button`} onClick={buttonOnClickFunc}>
      {buttonText}
    </button>
  );
};

export default Button;
