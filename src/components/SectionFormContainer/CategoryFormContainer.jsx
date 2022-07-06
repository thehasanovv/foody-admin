import * as Yup from "yup";
import React from "react";
import FormControl from "../Form/FormControl";
import { SectionFormContent } from "../SectionFormContent";
import { useTranslation } from "react-i18next";
import { addCategoryData } from "../../store/actions/categoryActions";
import { useDispatch } from "react-redux";

const CategoryForm = () => {
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();

  const addData = (data) => {
    dispatch(addCategoryData(data));
  };

  const initialValues = {
    img_url: "",
    name: "",
    slug: "",
  };

  const validationSchema = Yup.object({
    img: Yup.string(),
    name: Yup.string().required("Required"),
    slug: Yup.string().required("Required"),
  });

  return (
    <div>
      <SectionFormContent
        title={t("add category")}
        initialValues={initialValues}
        validationSchema={validationSchema}
        addData={addData}
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
