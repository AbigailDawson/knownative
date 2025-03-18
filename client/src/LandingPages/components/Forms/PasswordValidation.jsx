import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

function PasswordValidation({ password }) {
  const hasTyped = password.length > 0;

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
        <li
          key={index}
          style={{
            color: hasTyped ? (validation.test ? "var(--green-lt)" : "var(--red-poppy)") : "#556163"
          }}
        >
          {validation.test ? (
            <FaCheckCircle
              style={hasTyped ? { color: "var(--green-lt)" } : { color: "transparent" }}
              title="Test passed" />
          ) : (
            <FaExclamationTriangle
              style={hasTyped ? { color: "var(--red-poppy)" } : { color: "transparent" }}
              title={validation.message} />
          )}
          {validation.message}
        </li>
      ))}
    </ul>
  );
};

export default PasswordValidation;