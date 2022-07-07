import Button from "../Button";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { nanoid } from "nanoid";
import { useState, useContext } from "react";
import {
  DrawerContainer,
  DTitle,
  DSubContainer,
  DSubTitle,
  Panel,
  FormikForm,
  UploadImg,
  InputStyle,
  IconFileUpload,
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

  const onSubmit = (values, { resetForm }) => {
    addData({ ...values, id: nanoid() });
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
              {/* === SubContainer content === */}
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
                <Panel>
                  <InputStyle htmlFor="inputfile">
                    <IconFileUpload />
                    {t("form.upload")}
                    <input
                      type="file"
                      id="inputfile"
                      onChange={(val) => {
                        setFieldValue("img_url", val.target.files[0]);
                        setUploadImg(val.target.files[0]);
                      }}
                    />
                  </InputStyle>
                </Panel>
              </DSubContainer>
              {/* === SubContainer content === */}
              <DSubContainer>
                <DSubTitle>{t("form.form title")}</DSubTitle>
                <Panel>{children}</Panel>
              </DSubContainer>
              {/* === SubContainer content === */}
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
