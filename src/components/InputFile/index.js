import React from 'react';
import { InputStyle, IconFileUpload } from './InputStyle';

const InputFile = ({ setFieldValue, imgKey, setUploadImg, ...rest }) => {
  const handleChange = (e) => {
    setUploadImg && setUploadImg(e.target.files[0]);

    setFieldValue(imgKey, e.target.files[0]);
  };

  return (
    <InputStyle htmlFor="inputfile">
      <IconFileUpload />
      Upload
      <input type="file" id="inputfile" onChange={handleChange} />
    </InputStyle>
  );
};

export default InputFile;
