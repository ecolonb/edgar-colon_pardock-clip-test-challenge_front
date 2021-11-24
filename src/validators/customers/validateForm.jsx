export const isValidForm = (customerFormValues) => {
  const {
    name,
    last_name,
    email,
    phone_number,
    city,
    state,
    line1,
    postal_code
  } = customerFormValues;
  let valid = true;
  if (name.length < 2) valid = false;
  if (last_name.length < 2) valid = false;
  if (email.length < 3) valid = false;
  if (phone_number.length < 10) valid = false;

  if (city.length < 3) valid = false;
  if (state.length < 3) valid = false;
  if (line1.length < 3) valid = false;
  if (postal_code.length !== 5) valid = false;
  return valid;
};
