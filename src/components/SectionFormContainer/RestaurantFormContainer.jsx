import React from "react";
import * as Yup from "yup";
import FormControl from "../Form/FormControl";
import { SectionFormContext } from "../SectionFormContext";

const RestaurantForm = ({ setIsOpen }) => {
  const options = [
    {
      id: "001",
      title: "Fast Food",
      value: "fastFood",
    },
    {
      id: "002",
      title: "Pizza",
      value: "pizza",
    },
    {
      id: "003",
      title: "Coffee",
      value: "coffee",
    },
  ];

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
    img: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    cuisine: Yup.string().required("Required"),
    deliveryPrice: Yup.number().required("Required"),
    deliveryMinute: Yup.number().required("Required"),
    adress: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    slug: Yup.string().required("Required"),
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
          type="number"
          label="Delivery Price"
          name="deliveryPrice"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="number"
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
          control="select"
          label="Category"
          name="category"
          options={options}
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

export default RestaurantForm;
