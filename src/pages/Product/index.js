import React from "react";
import * as Yup from "yup";
import FormContainer from "../../components/Form/FormContainer";
import FormControl from "../../components/Form/FormControl";
import { DrawerContent } from "../../components/Drawer";
import { DrawerForm } from "../../components/DrawerForm";

const Products = () => {
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

  const onSubmitHandler = (values) => {
    console.log("Form data", values);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={handleOpen}>Add Products</button>
      <DrawerContent rotate="right" isOpen={open} setIsOpen={handleClose}>
        <DrawerForm
          title="Add Product"
          subTitle="Upload your image"
          subTitle2="Add your description and necessary information"
          setIsOpen={handleClose}
          onSubmitHandler={onSubmitHandler}
        >
          <FormContainer
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmitHandler={onSubmitHandler}
          >
            <FormControl
              control="input"
              type="email"
              label="Email"
              name="email"
              variant="outlined"
            />
          </FormContainer>
        </DrawerForm>
      </DrawerContent>
    </div>
  );
};

export default Products;
