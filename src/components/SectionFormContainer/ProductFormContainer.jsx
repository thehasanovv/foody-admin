import React from "react";
import * as Yup from "yup";
import FormControl from "../Form/FormControl";
import { SectionFormContext } from "../SectionFormContext";

const options = [
  {
    id: "001",
    title: "MC Donalds",
    value: "mcDonalds",
  },
  {
    id: "002",
    title: "Papa John's",
    value: "papaJohns",
  },
  {
    id: "003",
    title: "Burger King",
    value: "burgerKing",
  },
];

const ProductsForm = () => {
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
          control="textarea"
          rows={4}
          type="text"
          label="Description"
          name="description"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="number"
          label="Price"
          name="price"
          variant="outlined"
        />
        <FormControl
          control="select"
          label="Restuarants"
          name="rest"
          options={options}
        />
      </SectionFormContext>
    </div>
  );
};

export default ProductsForm;
