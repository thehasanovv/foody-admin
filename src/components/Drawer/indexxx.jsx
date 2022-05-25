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

export const DrawerForm = ({ children, title, initialValues, validationSchema }) => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
  };
  const [uploadImg, setUploadImg] = useState(null);

  return (
    <>
      <DrawerContainer>
        <DTitle>{title}</DTitle>
        {uploadImg && <img width="150" height="100" cover src={URL.createObjectURL(uploadImg)} />}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ setFieldValue, resetForm }) => (
            <FormikForm>
              <DSubContainer>
                <DSubTitle>Upload your image</DSubTitle>
                <Panel>
                  <InputFile
                    setFieldValue={setFieldValue}
                    imgKey="img"
                    setUploadImg={setUploadImg}
                  />
                </Panel>
              </DSubContainer>
              <DSubContainer>
                <DSubTitle>Add your description and necessary information</DSubTitle>
                <Panel>{children}</Panel>
              </DSubContainer>
              <DSubContainer>
                <Button width={45} bgColor={'#3268a8'} onClick={onSubmit}>
                  Cancel
                </Button>
                <Button  width={45} onClick={()=>resetForm()}>
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
