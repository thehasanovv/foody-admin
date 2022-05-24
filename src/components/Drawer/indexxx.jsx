import React, { useState } from 'react';
import Button from '../Button';
import { Formik } from 'formik';
import {
  DrawerContainer,
  DTitle,
  DSubContainer,
  DSubTitle,
  Panel,
  FormikForm,
} from './DrawerStyle';
import InputFile from '../InputFile';

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
  };
  const [uploadImg, setUploadImg] = useState(null);

  return (
    <>
      <DrawerContainer>
        {/* Title */}
        <DTitle>{title}</DTitle>
        {uploadImg && <img width="150" height="100" cover src={URL.createObjectURL(uploadImg)} />}

        {/* ===================================================== */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ setFieldValue, resetForm }) => (
            <FormikForm>
              {/* ===================================================== */}
              {/* SubTitle */}
              <DSubContainer>
                <DSubTitle>{subTitle}</DSubTitle>
                {/* Subtitle content */}
                <Panel>
                  <InputFile
                    setFieldValue={setFieldValue}
                    imgKey="img"
                    setUploadImg={setUploadImg}
                  />
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
                  bgColor={'#3268a8'}
                  onClick={() => {
                    setIsOpen();
                    resetForm();
                  }}>
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
