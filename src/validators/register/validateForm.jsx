export const isValidForm = (registerFormValues) => {
  let valid = true;
  if (registerFormValues.name.length < 2) valid = false;
  if (registerFormValues.email.length < 3) valid = false;
  if (
    registerFormValues.password !== registerFormValues.confirmedPassword ||
    registerFormValues.password.length < 6
  )
    valid = false;
  return valid;
};
