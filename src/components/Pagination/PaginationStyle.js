import { Pagination } from "@mui/material";
import styled from "styled-components";

export const PaginationContainer = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.5rem;

  & button {
    border-radius: 50%;
    width: 3.5rem !important;
    height: 3.5rem !important;
    background-color: transparent !important;
    border: 1px solid ${({ theme }) => theme.bgPaginationBorder};
    color: ${({ theme }) => theme.text};
    font-weight: bold;
  }

  & .Mui-selected {
    background-color: ${({ theme }) => theme.bgPaginationBorder}!important;
  }
`;
