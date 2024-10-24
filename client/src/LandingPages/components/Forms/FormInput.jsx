import { useState } from "react";
import "../../SignupPage/SignupPage.css"

const FormInput = (props) => {
    const { label, htmlFor, onChange, id, errorMessage, icon, ...otherInputProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
            <div className="input-box">
                <input className
                {...otherInputProps} 
                id={id} 
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => otherInputProps.name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}/>
                <label className="label-container" htmlFor={htmlFor}>
                    {icon}
                    <span className="label-text">{label}</span>
                </label>
                <span className="input-error-message">{errorMessage}</span>
            </div>
    )
}

export default FormInput