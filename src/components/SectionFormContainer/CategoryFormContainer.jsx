import React from "react";
import * as Yup from "yup";
import FormControl from "../Form/FormControl";
import { SectionFormContent } from "../SectionFormContent";

const CategoryForm = ({ setIsOpen }) => {
  const initialValues = {
    img: "",
    name: "",
    slug: "",
  };

  const validationSchema = Yup.object({
    img: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    slug: Yup.string().required("Required"),
  });

  return (
    <div>
      <SectionFormContent
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
          label="Slug"
          name="slug"
          variant="outlined"
        />
      </SectionFormContent>
    </div>
  );
};

export default CategoryForm;
