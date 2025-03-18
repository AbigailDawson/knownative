import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

function PasswordValidation({ password, confirmPassword = null, isConfirmField = false }) {
  const hasTypedPassword = password.length > 0;
  const hasTypedConfirmPassword = isConfirmField ? confirmPassword.length > 0 : null;

  const validations = !isConfirmField ? [
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
  ] : [
    {
      test: confirmPassword === password,
      message: 'Passwords must match.'
    }
  ];

  if (!isConfirmField) {
    return (
      <ul className="password-validation">
        {validations.map((validation, index) => (
          <li
            key={index}
            style={{
              color: hasTypedPassword ? (validation.test ? "var(--green-lt)" : "var(--red-poppy)") : "#556163"
            }}
          >
            {validation.test ? (
              <FaCheckCircle
                style={hasTypedPassword ? { color: "var(--green-lt)" } : { color: "transparent" }}
                title="Test passed" />
            ) : (
              <FaExclamationTriangle
                style={hasTypedPassword ? { color: "var(--red-poppy)" } : { color: "transparent" }}
                title={validation.message} />
            )}
            {validation.message}
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul className="password-validation">
        {validations.map((validation, index) => (
          <li
            key={index}
            style={{
              color: hasTypedConfirmPassword ? (validation.test ? "var(--green-lt)" : "var(--red-poppy)") : "#556163"
            }}
          >
            {validation.test ? (
              <FaCheckCircle
                style={hasTypedConfirmPassword ? { color: "var(--green-lt)" } : { color: "transparent" }}
                title="Test passed" />
            ) : (
              <FaExclamationTriangle
                style={hasTypedConfirmPassword ? { color: "var(--red-poppy)" } : { color: "transparent" }}
                title={validation.message} />
            )}
            {validation.message}
          </li>
        ))}
      </ul>
    );
  };
};

export default PasswordValidation;