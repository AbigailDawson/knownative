export const validateInput = (inputValue) => {
  const errors = {};
  
  // First Name: between 2-20 characters, no special characters or numbers
  if (!inputValue.firstName) {
    errors.firstName = 'First Name is required.';
  } else {
    if (/[^A-Za-z]/.test(inputValue.firstName)) {
      errors.firstName = 'First Name must not contain numbers or special characters.';
    } else if (inputValue.firstName.length < 2 || inputValue.firstName.length > 20) {
      errors.firstName = 'First Name must be 2-20 characters long.';
    }
  }

  // Last Name: between 2-20 characters, no special characters or numbers
  if (!inputValue.lastName) {
    errors.lastName = 'Last Name is required.';
  } else {
    if (/[^A-Za-z]/.test(inputValue.lastName)) {
      errors.lastName = 'Last Name must not contain numbers or special characters.';
    } else if (inputValue.lastName.length < 2 || inputValue.lastName.length > 20) {
      errors.lastName = 'Last Name must be 2-20 characters long.';
    }
  }

  // Username: between 3-20 characters, letters, numbers, and underscores only
  if (!inputValue.username) {
    errors.username = 'Username is required.';
  } else {
    if (/[^A-Za-z0-9_]/.test(inputValue.username)) {
      errors.username = 'Username can only contain letters, numbers, and underscores.';
    } else if (inputValue.username.length < 3 || inputValue.username.length > 20) {
      errors.username = 'Username must be 3-20 characters long.';
    }
  }

  // Email: needs "@" symbol
  if (!inputValue.email) {
    errors.email = 'Email is required.';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputValue.email)) {
      errors.email = 'Please enter a valid email.';
    }
  }

  // Confirm Password: matches the password
  if (!inputValue.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required.';
  } else if (inputValue.confirmPassword !== inputValue.password) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  return errors;
};