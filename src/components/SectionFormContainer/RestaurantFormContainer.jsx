import React from "react";
import * as Yup from "yup";
import FormControl from "../Form/FormControl";
import { SectionFormContext } from "../SectionFormContext";

const ProductsForm = ({ setIsOpen }) => {
  const initialValues = {
    img: "",
    name: "",
    cuisine: "",
    deliveryPrice: "",
    deliveryMinute: "",
    adress: "",
    category: "",
    slug: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
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
          label="Cuisine"
          name="cuisine"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="Delivery Price"
          name="deliveryPrice"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="Delivery Minute"
          name="deliveryMinute"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="Adress"
          name="adress"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="Category"
          name="category"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="Slug"
          name="slug"
          variant="outlined"
        />
      </SectionFormContext>
    </div>
  );
};

export default ProductsForm;
