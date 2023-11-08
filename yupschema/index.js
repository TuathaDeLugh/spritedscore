import * as Yup from "yup";

export const loginSchema =  Yup.object({
    email: Yup.string().min(2).max(25).required("Please enter email"),
    password: Yup.string().min(3).required("Please enter password"),
  });
  export const UsernameSchema =  Yup.object({
    username: Yup.string().min(2).max(25).required("Please enter username")
  });