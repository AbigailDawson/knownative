import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

function PasswordValidation({ password }) {
    const validations = [
      {
        test: password.length >= 8 && password.length <= 32,
        message: 'The password must be 8-32 characters long.',
      },
      {
        test: /[A-Z]/.test(password),
        message: 'The password must contain at least one uppercase letter.',
      },
      {
        test: /[a-z]/.test(password),
        message: 'The password must contain at least one lowercase letter.',
      },
      {
        test: /\d/.test(password),
        message: 'The password must include at least one digit (0-9).',
      },
      {
        test: /[@$!%*?&]/.test(password),
        message: 'The password must contain at least one special character (!, @, #, $).',
      },
    ];

  return (
    <ul className="password-validation">
      {validations.map((validation, index) => (
        <li key={index}>
          {validation.test ? <FaCheckCircle style={{color: "#556163"}} title="Test passed"/> 
          : <FaExclamationTriangle style={{color: "red"}} title={validation.message}/>} 
          {validation.message}
        </li>
      ))}
    </ul>
  );
};

export default PasswordValidation;