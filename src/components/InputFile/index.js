import React from 'react';
import { InputStyle, IconFileUpload } from './InputStyle';

const InputFile = ({ setFieldValue, imgKey, ...rest }) => {
  const handleChange = (e) => {
    setFieldValue(imgKey, e.target.files[0]);
  };

  return (
    <InputStyle htmlFor="inputfile">
      <IconFileUpload />
      Upload
      <input type="file" id="inputfile" onChange={() => handleChange} />
    </InputStyle>
  );
};

export default InputFile;

///src={URL.createObjectURL(uploadImg)}
