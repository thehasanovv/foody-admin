import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styled from "styled-components";

export const IconDelete = styled(DeleteForeverIcon)`
  width: 24px !important;
  height: 24px !important;
  fill: ${({ theme }) => theme.colors.lightRed} !important;
`;
