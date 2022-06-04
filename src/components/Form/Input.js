import React from "react";
import { Field } from "formik";
import { TextFieldMui, ContainerInput } from "./FormStyled";

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
              form.errors[name] && form.touched[name] && form.errors[name]
            }
          />
        )}
      </Field>
    </ContainerInput>
  );
};

export default Input;
