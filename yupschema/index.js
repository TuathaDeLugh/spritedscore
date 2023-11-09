import * as Yup from "yup";

export const loginSchema =  Yup.object({
    email: Yup.string().min(2).max(25).required("Please enter email"),
    password: Yup.string().min(3).required("Please enter password"),
  });
  export const UsernameSchema =  Yup.object({
    username: Yup.string().min(2).max(25).required("Please enter username")
  });

  export const SignupSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter Full Name"),
    username: Yup.string().min(2).max(25).required("Please enter username"),
    email: Yup.string().email().required("Please enter email"),
    pass: Yup.string()
    .required("Please enter a password")
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  confirmpassword: Yup.string()
    .required("Please confirm password")
    .oneOf([Yup.ref('pass'), null], 'Confirm Password does not match with password'),
  })

  export const emailSchema = Yup.object({
    fullname: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    subject: Yup.string().min(3).required("Please enter subject"),
    details: Yup.string().min(10).required("Please enter detail"),
  });