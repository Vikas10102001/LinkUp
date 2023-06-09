export const validatePassword = (password) => {
  const validator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  return validator.test(password);
};
