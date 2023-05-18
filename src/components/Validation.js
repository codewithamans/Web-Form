export const Validation = (values) => {
  const errors = {};
  const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const mobile = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const name = /^[A-Za-z]{5,}$/;
  if (values.name == "") {
    errors.name = "Name is required";
  } else if (!name.test(values.name)) {
    errors.name = "Name should be of minimum 5 characters";
  }
  if (values.email == "") {
    errors.email = "Email is required";
  } else if (!email.test(values.email)) {
    errors.email = "Invalid Email Id";
  }
  if (values.mobile == "") {
    errors.mobile = "Mobile is required";
  } else if (!mobile.test(values.mobile)) {
    errors.mobile = "Mobile Number should be of 10 characters";
  }
  return errors;
};
