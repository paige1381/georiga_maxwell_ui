// user has selected guests, but those guests do not have an email
export function showEmailInput(hasEmail, guests) {
  if (!hasEmail && guests && guests.length > 0) {
    return true;
  }
  return false;
}

// user has selected guests that already have an email
export function showEmailEdit(hasEmail, guests) {
  if (hasEmail && guests && guests.length > 0) {
    return true;
  }
  return false;
}

// user has submitted an invalid email
export function isValidEmail(email) {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
  return email.length > 0 && regexEmail.test(email);
}
