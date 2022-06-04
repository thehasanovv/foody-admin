import React from "react";
import { useTranslation } from "react-i18next";
import { InputStyle, IconFileUpload } from "./InputStyle";

const InputFile = ({ setFieldValue, imgKey, setUploadImg }) => {
  const { t } = useTranslation("translation");

  const handleChange = (e) => {
    setUploadImg && setUploadImg(e.target.files[0]);
    setFieldValue(imgKey, e.target.files[0]);
  };

  return (
    <InputStyle htmlFor="inputfile">
      <IconFileUpload />
      {t("form.upload")}
      <input type="file" id="inputfile" onChange={handleChange} />
    </InputStyle>
  );
};

export default InputFile;
