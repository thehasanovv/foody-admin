import { Formik, Form } from "formik";
import Button from "../Header/Button";

const FormContainer = ({
  initialValues,
  validationSchema,
  children,
}) => {
  const onSubmit = (values) => {
    // onSubmitHandler(values);
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="form">
          {children}
          <Button
            width={100}
            type="submit"
            className="registerButton"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
