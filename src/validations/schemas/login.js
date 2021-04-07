import * as yup from "yup";

export const LoginValidationSchema = yup.object({
  username: yup
    .string()
    .min(3, "Username should be at least 3 characters!")
    .required("Username is required!"),
  password: yup
    .string()
    .min(8, "Password should be at least 8 characters!")
    .required("Password is required!"),
});
