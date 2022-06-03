import { Box } from "@mui/material";
import styled from "styled-components";

export const ModalBody = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 226px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  border-radius: 4px;
`;

export const ModalTitle = styled.h2`
  font-family: "Open Sans";
  color: #000;
  font-weight: 600;
  font-size: 28px;
  line-height: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ModalSubTitle = styled.p`
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #4f4f4f;
  margin-bottom: 1rem;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ModalButtonCancel = styled.button`
  width: 106px;
  height: 33.79px;
  background: #ffffff;
  border: 2px solid #bdbdbd;
  border-radius: 4px;
`;

export const ModalButtonAccept = styled.button`
  width: 106px;
  height: 33.79px;
  background: #d63626;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
`;
