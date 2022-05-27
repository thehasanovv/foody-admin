import { TextField } from "@mui/material";
import Select from "@mui/material/Select";
import styled from "styled-components";
import InputLabel from "@mui/material/InputLabel";

export const ContainerInput = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;


export const TextFieldMui = styled(TextField)`
  & .MuiOutlinedInput-root {
    color: ${({ theme }) => theme.colors.grayText};
    background-color: ${({ theme }) => theme.colors.darkBlue_4};
  }
  & .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.grayText};
  }

  & label.Mui-focused {
    color: ${({ theme }) => theme.colors.lightPurple_3};
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.lightPurple_3};
    }
  }
`;

export const SelectFieldMui = styled(Select)`
  background-color: ${({ theme }) => theme.colors.darkBlue_4};

  & .MuiSelect-select {
    color: ${({ theme }) => theme.colors.grayText};
  }
  & .MuiSelect-icon {
    color: ${({ theme }) =>
      theme.colors.grayText}; // for icon drop down icon color: ;
  }
`;

export const InputLabelMui = styled(InputLabel)`
  color: ${({ theme }) => theme.colors.grayText} !important;
`;
