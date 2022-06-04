import styled from "styled-components";
import { IoMdCloudUpload } from "react-icons/io";

export const InputStyle = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 1rem;
  cursor: pointer;

  & input {
    display: none;
  }
`;

export const IconFileUpload = styled(IoMdCloudUpload)`
  color: ${({ theme }) => theme.colors.lightPurple_3};
  font-size: 3rem;
  text-align: center;
`;
