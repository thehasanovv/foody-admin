import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Field } from "formik";
import { InputLabelMui } from "./FormStyled";
import { SelectFieldMui, ContainerInput } from "./FormStyled";

const SelectFormik = ({ name, label, options, ...rest }) => {
  return (
    <ContainerInput>
      <Field name={name}>
        {({ field, form }) => {
          const { rest } = form.values;
          return (
            <FormControl
              fullWidth
              error={form.errors[name] && form.touched[name]}
            >
              <InputLabelMui id={name}>{label}</InputLabelMui>
              <SelectFieldMui
                labelId={name}
                id="demo-simple-select"
                value={rest}
                label={label}
                {...field}
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))}
              </SelectFieldMui>
              <FormHelperText error={form.errors[name] && form.touched[name]}>
                {form.errors[name] && form.touched[name] && form.errors[name]}
              </FormHelperText>
            </FormControl>
          );
        }}
      </Field>
    </ContainerInput>
  );
};

export default SelectFormik;
