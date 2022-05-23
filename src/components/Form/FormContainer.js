import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "./FormControl";

const FormContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="form">
          {children}
          <button
            type="submit"
            className="registerButton"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
