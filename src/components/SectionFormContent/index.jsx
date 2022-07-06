import Button from "../Button";
import InputFile from "../InputFile";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useState, useContext } from "react";
import {
  DrawerContainer,
  DTitle,
  DSubContainer,
  DSubTitle,
  Panel,
  FormikForm,
  UploadImg,
} from "./SectionFormStlyle";

export const SectionFormContent = ({
  children,
  title,
  initialValues,
  validationSchema,
  addData,
}) => {
  const [uploadImg, setUploadImg] = useState(null);
  const { openProductDrawer, setOpenProductDrawer } = useContext(DrawerContext);
  const { setOpenDrawer } = useContext(DrawerContext);
  const { t } = useTranslation("translation");
  console.log("uploadImg", uploadImg);
  
  const onSubmit = (values, { resetForm }) => {
    addData(values);
    setUploadImg(null);
    setOpenDrawer(false);
    resetForm();
  };

  return (
    <>
      <DrawerContainer>
        <DTitle>{title}</DTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, resetForm }) => (
            <FormikForm>
              <DSubContainer>
                <DSubTitle>
                  {t("form.upload title")}
                  <UploadImg>
                    {uploadImg && (
                      <img
                        style={{ objectFit: "contain" }}
                        src={URL.createObjectURL(uploadImg)}
                      />
                    )}
                  </UploadImg>
                </DSubTitle>
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
                <DSubTitle>{t("form.form title")}</DSubTitle>
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
                  {t("cancel")}
                </Button>
                <Button type="submit" width={45}>
                  {t("submit")}
                </Button>
              </DSubContainer>
            </FormikForm>
          )}
        </Formik>
      </DrawerContainer>
    </>
  );
};
