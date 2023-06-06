import * as yup from "yup";
import "yup-phone";
import YupPassword from "yup-password";
YupPassword(yup);

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .minLowercase(1, "Username must contain at least 1 lower case letter")
    .minUppercase(1, "Username must contain at least 1 upper case letter")
    .minNumbers(1, "Username must contain at least 1 number")
    .required("Username is required"),
  password: yup
    .string()
    .min(
      8,
      "Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character"),
});
const signupValidationSchema = yup.object().shape({
  username: yup
    .string()
    .minLowercase(1, "Username must contain at least 1 lower case letter")
    .minUppercase(1, "Username must contain at least 1 upper case letter")
    .minNumbers(1, "Username must contain at least 1 number")
    .min(10, "Username must contain 10 or more characters")
    .required("Username is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(
      8,
      "Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character")
    .required(" Password is required"),
  confirm: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Confirm password must match"),
});
const requestResetPasswordValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is required"),
});
const resetPasswordValidation = yup.object().shape({
  password: yup
    .string()
    .min(
      8,
      "Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character"),
  confirm: yup
    .string()
    .required("Confirm New Password is required")
    .oneOf([yup.ref("password"), null], "New Password must match"),
});

export {
  loginValidationSchema,
  requestResetPasswordValidation,
  resetPasswordValidation,
  signupValidationSchema,
};
