import Button from "../Button";
import InputFile from "../InputFile";
import { Formik } from "formik";
import { useState, useContext } from "react";
import { DrawerContext } from "../../contextApi/DrawerContext";
import {
  DrawerContainer,
  DTitle,
  DSubContainer,
  DSubTitle,
  Panel,
  FormikForm,
} from "./SectionFormStlyle";

export const SectionFormContent = ({
  children,
  title,
  initialValues,
  validationSchema,
}) => {
  const { setOpenDrawer } = useContext(DrawerContext);
  const { openProductDrawer, setOpenProductDrawer } = useContext(DrawerContext);

  const [uploadImg, setUploadImg] = useState(null);

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    setUploadImg(null);
    setOpenDrawer(false);
    resetForm();
  };

  return (
    <>
      <DrawerContainer>
        <DTitle>{title}</DTitle>
        {uploadImg && (
          <img width="150" height="100" src={URL.createObjectURL(uploadImg)} />
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, resetForm }) => (
            <FormikForm>
              <DSubContainer>
                <DSubTitle>Upload your image</DSubTitle>
                {/* Subtitle content */}
                <Panel>
                  <InputFile
                    imgKey="img"
                    setFieldValue={setFieldValue}
                    setUploadImg={setUploadImg}
                  />
                </Panel>
              </DSubContainer>
              <DSubContainer>
                <DSubTitle>
                  Add your description and necessary information
                </DSubTitle>
                {/* Subtitle content */}
                <Panel>{children}</Panel>
              </DSubContainer>
              <DSubContainer>
                <Button
                  type="button"
                  bgColor={"#3268a8"}
                  width={45}
                  onClick={() => {
                    openProductDrawer && setOpenProductDrawer(false);
                    setOpenDrawer(false);
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
