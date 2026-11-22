export const checkValidData = (name, email, password, isSignInForm) => {
  const isValidName = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)+$/.test(name.trim());

  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  if (!isSignInForm && !isValidName) {
    return "Please enter your full name";
  }
  
  if (!isValidEmail) {
    return "Email ID is not valid";
  }

  if (!isValidPassword) {
    return "Password is not valid";
  }

  return null;
};
