import React from "react";
import * as Yup from "yup";
import FormControl from "../Form/FormControl";
import { SectionFormContext } from "../SectionFormContext";

const OfferForm = () => {
  const initialValues = {
    img: "",
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    img: Yup.string().required("Required"),
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
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
          label="Title"
          name="title"
          variant="outlined"
        />
        <FormControl
          control="input"
          type="text"
          label="Description"
          name="description"
          variant="outlined"
        />
      </SectionFormContext>
    </div>
  );
};

export default OfferForm;
