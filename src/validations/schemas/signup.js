import * as yup from "yup";

export const SignUpValidationSchema = yup.object({
  username: yup
    .string()
    .min(3, "Username should be at least 3 characters!")
    .required("Username is required!"),
  password: yup
    .string()
    .min(8, "Password should be at least 8 characters!")
    .required("Password is required!"),
  repeatPassword: yup
    .string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    })
    .min(8, "Password should be at least 8 characters!")
    .required("Password is required!"),
  email: yup
    .string()
    .email("Email should be valid!")
    .required("Email is required!"),
});
