import React from 'react';
import { Field } from 'formik';
import TextField from '@mui/material/TextField';

const Input = ({ name, ...rest }) => {
  return (
    <div className="">
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
    </div>
  );
};

export default Input;
