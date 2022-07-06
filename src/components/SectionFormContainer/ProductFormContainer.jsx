import React from "react";
import * as Yup from "yup";
import FormControl from "../Form/FormControl";
import { SectionFormContent } from "../SectionFormContent";
import { useTranslation } from "react-i18next";
import { addProductData } from "../../store/actions/productActions";
import { useDispatch } from "react-redux";

const ProductsForm = () => {
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();

  const addData = (data) => {
    dispatch(addProductData(data));
  };

  const options = [
    {
      id: "004",
      title: "MC Donalds",
      value: "mcDonalds",
    },
    {
      id: "005",
      title: "Papa John's",
      value: "papaJohns",
    },
    {
      id: "006",
      title: "Burger King",
      value: "burgerKing",
    },
  ];

  const initialValues = {
    img: "",
    name: "",
    description: "",
    price: "",
    restaurant: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    price: Yup.string().required("Required"),
    restaurant: Yup.string().required("Required"),
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
          name="restaurant"
          options={options}
        />
      </SectionFormContent>
    </div>
  );
};

export default ProductsForm;
