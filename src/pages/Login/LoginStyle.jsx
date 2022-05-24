import styled from "styled-components";
import Paper from "@mui/material/Paper";

export const LoginContainer = styled(Paper).attrs({ elevation: 5 })`
  display: flex;
  height: 50%;
  width: 100%;
  max-width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 1rem;

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    display: block;
    width: 320px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-image: none;
    border-radius: 10px;
  }
`;
export const LoginImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 75%;
    object-fit: contain;
  }
`;
