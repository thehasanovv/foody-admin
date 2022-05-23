import React from "react";
import { Field } from "formik";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

const Input = ({ name, ...rest }) => {
  return (
    <ContainerInput className="">
      <Field name={name}>
        {({ field, form }) => (
          <TextField
            id={name}
            {...field}
            {...rest}
            error={form.errors[name] && form.touched[name]}
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
`;
export default Input;
