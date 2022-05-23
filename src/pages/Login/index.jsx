import * as Yup from "yup";
import FormContainer from "../../components/Form/FormContainer";
import FormControl from "../../components/Form/FormControl";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Password is required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const onSubmit = (values, form) => {
    console.log("Form data", values);
  };

  return (
    <div>
      <FormContainer
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormControl
          control="input"
          type="email"
          label="Email"
          name="email"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="password"
          label="Password"
          name="password"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="password"
          label="Confirm password"
          name="passwordConfirmation"
          variant="outlined"
        />
      </FormContainer>
    </div>
  );
};

export default Login;
