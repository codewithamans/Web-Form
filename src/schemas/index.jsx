import * as yup from "yup";
export const userSchema = yup.object().shape({
  name: yup.string().min(5).max(30).required("Enter your Name"),
  email: yup.string().email().required("Enter your Email"),
  mobile: yup.number().max(10).required("Enter your Mobile Number"),
});
