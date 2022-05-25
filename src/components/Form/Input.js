import React from "react";
import { Field } from "formik";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

const Input = ({ name, ...rest }) => {
  return (
    <ContainerInput className="">
      <Field name={name}>
        {({ field, form }) => (
          <TextFieldMui
            id={name}
            {...field}
            {...rest}
            error={form.errors[name] && form.touched[name]}
            fullWidth
            helperText={
              // form.errors[name] && form.touched[name] && form.errors[name]
              form.errors[name] && form.touched[name] && form.errors[name]
            }
          />
        )}
      </Field>
    </ContainerInput>
  );
};

const ContainerInput = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const TextFieldMui = styled(TextField)`
  & label.Mui-focused {
    color: #c035a2;
    font-weight: 700;
  }
  & label {
    color: #c035a2;
    font-weight: 500;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 2px solid #c035a2;
    }
  }
`;
export default Input;
