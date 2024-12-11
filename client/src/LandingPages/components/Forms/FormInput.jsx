import { useState } from "react";
import "../../SignupPage/SignupPage.scss"

const FormInput = (props) => {
    const { label, htmlFor, onChange, id, errorMessage, icon, ...otherInputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
            <div className="signup-form__input-box">
                <input
                {...otherInputProps} 
                id={id} 
                className="signup-form__input" 
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => otherInputProps.name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
                aria-describedby={`${id}-error`}
                aria-invalid={!!errorMessage}
                />
                <label className="signup-form__label-container" htmlFor={htmlFor}>
                    {icon}
                    <span className="singup-form__label-text">{label}</span>
                </label>
                {otherInputProps.name !== 'password' && (
                <span id={`${id}-error`} className="signup-form__input--error" role="alert">
                    {errorMessage}
                </span>
                )}
            </div>
    )
}

export default FormInput