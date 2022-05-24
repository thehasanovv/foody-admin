import React from "react";
import Button from "../../components/Button";
import { Formik } from "formik";
import {
  DrawerContainer,
  DTitle,
  DSubContainer,
  DSubTitle,
  Panel,
  FormikForm,
} from "./DrawerStyle";

export const DrawerForm = ({
  children,
  title,
  subTitle,
  subTitle2,
  initialValues,
  validationSchema,
  setIsOpen,
}) => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    // setForm(values);
    // resetForm();
    // setUploadImg(null);
  };
  return (
    <>
      <DrawerContainer>
        {/* Title */}
        <DTitle>{title}</DTitle>
        {/* ===================================================== */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <FormikForm>
              {/* ===================================================== */}
              {/* SubTitle */}
              <DSubContainer>
                <DSubTitle>{subTitle}</DSubTitle>
                {/* Subtitle content */}
                <Panel>
                  <input type="text" placeholder="Search" />
                  <button type="submit">Search</button>
                </Panel>
              </DSubContainer>
              {/* ===================================================== */}
              {/* SubTitle2 */}
              <DSubContainer>
                <DSubTitle>{subTitle2}</DSubTitle>
                {/* Subtitle content */}
                <Panel>{children}</Panel>
              </DSubContainer>
              {/* Buttons */}

              <DSubContainer>
                <Button
                  width={45}
                  bgColor={"#3268a8"}
                  onClick={() => {
                    setIsOpen();
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" width={45}>
                  Submit
                </Button>
              </DSubContainer>
            </FormikForm>
          )}
        </Formik>
      </DrawerContainer>
    </>
  );
};