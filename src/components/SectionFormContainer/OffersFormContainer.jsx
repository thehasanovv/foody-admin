import React from "react";
import * as Yup from "yup";
import FormControl from "../Form/FormControl";
import { SectionFormContent } from "../SectionFormContent";
import { useTranslation } from "react-i18next";
import { addOfferData } from "../../store/actions/offersActions";
import { useDispatch } from "react-redux";

const OfferForm = () => {
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();
  
  const addData = (data) => {
    dispatch(addOfferData(data));
  };

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
      <SectionFormContent
        title={t("add offer")}
        initialValues={initialValues}
        validationSchema={validationSchema}
        addData={addData}
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
      </SectionFormContent>
    </div>
  );
};

export default OfferForm;
