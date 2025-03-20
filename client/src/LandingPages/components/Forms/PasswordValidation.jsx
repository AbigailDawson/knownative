import { FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

function PasswordValidation({ password, confirmPassword = null, isConfirmField = false }) {
  const hasTypedConfirmPassword = confirmPassword?.length;

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
      message: 'Passwords do not match.'
    }
  ];

  return (
    <ul className="password-validation">
      {validations.map((validation, index) => {
        const isValid = validation.test;
        const shouldShow = (!isConfirmField) || (isConfirmField && hasTypedConfirmPassword && !isValid);

        return (
          <li
            key={index}
            style={shouldShow ? (
              {
                color: "#556163"
              }
            ) : (
              {
                display: "none"
              }
            )}
          >
            {shouldShow ? (
              isValid ? (
                <FaCheckCircle
                  title="Test passed"
                  style={{ color: "#197D00" }}
                />
              ) : (
                <FaExclamationTriangle
                  title={validation.message}
                  style={{ color: "#962828" }}
                />
              )
            ) : <FaExclamationTriangle style={{ color: "transparent" }} />
            }
            {validation.message}
          </li>
        );
      })}
    </ul>
  );
}

export default PasswordValidation;