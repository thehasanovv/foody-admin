import styled from "styled-components";
import { List } from "@mui/material";
import { Box } from "@mui/system";
import { Form } from "formik";

export const DrawerContainer = styled(List)`
  width: 70vw;
  height: 100vh;
  background: ${({ theme }) => theme.bgDrawer};

  @media screen and (max-width: 576px) {
    width: 100vw;
    height: auto;
  }
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;
`;

//Bu panel Drawer icerisinde olan form ve sekil inputu ucun hazirlanib
export const Panel = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  background: ${({ theme }) => theme.bgDrawerSecond};
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 0.5rem;
  max-height: 300px;
  overflow-y: auto;

  @media screen and (max-width: 976px) {
    width: 100%;
    text-align: center;
  }
`;

/*Drawer Title part */
export const DTitle = styled(Box)`
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  padding: 0 0 0 3rem;
  font-size: 30px; //bunu hell etmek global fonts goturmesi ucun
  font-weight: 700; //bunu hell etmek global fonts goturmesi ucun
  color: ${({ theme }) => theme.colors.grayText};

  @media screen and (max-width: 976px) {
    padding: 0 0 0 1rem;
  }
`;
/* ======================================= */

/* Drawer Subtitle part */
export const DSubContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0 5rem;

  @media screen and (max-width: 976px) {
    flex-direction: column;
    padding: 0 1rem;

    & > button {
      margin-bottom: 10px;
      width: 100%;
    }
  }
`;

export const DSubTitle = styled(Box)`
  width: 30%;
  color: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: 400; //bunu hell etmek global fonts goturmesi ucun

  @media screen and (max-width: 976px) {
    width: 100%;
    text-align: center;
  }
`;

export const UploadImg = styled.div`
  object-fit: cover;
  margin-top: 1rem;

  img {
    width: 150px;
    height: 150px;

    @media screen and (max-width: 576px) {
      display: block;
      margin: 0 auto;
    }
  }
`;

/* ============================== */
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
