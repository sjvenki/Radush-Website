export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  // Password must be at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Password must contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Password must contain at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Password must contain at least one number
  if (!/\d/.test(password)) {
    return false;
  }

  // Password must contain at least one special character
  if (!/[^a-zA-Z0-9]/.test(password)) {
    return false;
  }

  return true;
};

export const validateAddress = (address) => {
  if (address.length > 250) {
    return true;
  }
};
