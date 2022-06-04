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
} from "./SectionFormStlyle";

export const SectionFormContent = ({
  children,
  title,
  initialValues,
  validationSchema,
}) => {
  const [uploadImg, setUploadImg] = useState(null);
  const { openProductDrawer, setOpenProductDrawer } = useContext(DrawerContext);
  const { setOpenDrawer } = useContext(DrawerContext);
  const { t } = useTranslation("translation");

  const onSubmit = (values, { resetForm }) => {
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
              {uploadImg && (
                <img
                  width="150"
                  height="100"
                  src={URL.createObjectURL(uploadImg)}
                />
              )}
              <DSubContainer>
                <DSubTitle>{t("form.upload title")}</DSubTitle>
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
