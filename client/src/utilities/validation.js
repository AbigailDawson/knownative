export const validateLogin = (inputValue) => {
    const { email, password } = inputValue;
  
    const isEmpty = (field) => !field || field.trim() === '';
  
    if (isEmpty(email) && isEmpty(password)) {
      return 'Please enter a valid email and password.';
    }
  
    if (isEmpty(email)) {
      return 'Please enter a valid email.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email.';
    }
  
    if (isEmpty(password)) {
      return 'Please enter a valid password.';
    }
  
    return null;
  };