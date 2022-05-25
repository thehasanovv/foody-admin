import React from "react";
import * as Yup from "yup";
import FormControl from "../Form/FormControl";

import { SectionFormContext } from "../SectionFormContext";

const ProductsForm = ({ setIsOpen }) => {
  const initialValues = {
    img: "",
    name: "",
    description: "",
    price: "",
    rest: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    price: Yup.string().required("Required"),
    rest: Yup.string().required("Required"),
  });

  return (
    <div>
      <SectionFormContext
        title="Add Product"
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <FormControl
          control="input"
          type="text"
          label="Name"
          name="name"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="Description"
          name="description"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="Price"
          name="price"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="Restuarants"
          name="rest"
          variant="outlined"
        />
      </SectionFormContext>
    </div>
  );
};

export default ProductsForm;
