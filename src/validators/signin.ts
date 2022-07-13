import * as yup from "yup";

const signinSchema = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid e-mail")
      .required("E-mail field is required"),
    password: yup.string().required("Password field is required"),
  })
  .required();

export default signinSchema;
