import React from "react";
import { Field } from "formik";
import { FormField } from "./FormStyled";
import { TextFieldMui, ContainerInput } from "./FormStyled";

const Input = ({ name, ...rest }) => {
  return (
    <ContainerInput className="">
      <FormField name={name}>
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
      </FormField>
    </ContainerInput>
  );
};

export default Input;
