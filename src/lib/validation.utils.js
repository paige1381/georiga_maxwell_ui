// user has selected guests, but those guests do not have an email
export function showEmailInput(hasEmail, guests) {
  console.log("--- showEmailInput ---");
  console.log("hasEmail:", hasEmail);
  console.log("guests:", guests);

  if (!hasEmail && guests && guests.length > 0) {
    return true;
  }
  return false;
}

// user has selected guests that already have an email
export function showEmailEdit(hasEmail, guests) {
  console.log("--- showEmailEdit ---");
  console.log("hasEmail:", hasEmail);
  console.log("guests:", guests);

  if (hasEmail && guests && guests.length > 0) {
    return true;
  }
  return false;
}

// user has submitted an invalid email
export function isValidEmail(email) {
  console.log("--- showEmailError ---");
  console.log("email:", email);

  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
  return regexEmail.test(email);
}

// user has selected guests and added an email
export function showEmailConfirmation(hasEmail, error) {
  if (hasEmail && !error) {
    return true;
  }
  return false;
}
