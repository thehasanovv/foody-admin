import React from "react";
import { Field } from "formik";
import { TextFieldMui, ContainerInput } from "./FormStyled";

const Textarea = ({ name, ...rest }) => {
  return (
    <ContainerInput>
      <Field name={name}>
        {({ field, form }) => (
          <TextFieldMui
            id={name}
            {...field}
            {...rest}
            multiline
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

export default Textarea;
