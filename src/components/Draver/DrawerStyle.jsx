import styled from 'styled-components';
import { List } from '@mui/material';
import { Box } from '@mui/system';

export const DrawerContainer = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70vw;
  height: 100vh;
  background: ${({ theme }) => theme.bgDrawer};
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
`;

/*Drawer Title part */

export const DTitle = styled(Box)`
  width: 100%;
  height: 10%;
  box-sizing: border-box;
  padding: 0 0 0 3rem;
  font-size: 30px; //bunu hell etmek global fonts goturmesi ucun
  font-weight: 700; //bunu hell etmek global fonts goturmesi ucun
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
`;

export const DSubTitle = styled(List)`
  width: 30%;
  color: ${({ theme }) => theme.text};
  font-size: 18px; //bunu hell etmek global fonts goturmesi ucun
  font-weight: 400; //bunu hell etmek global fonts goturmesi ucun
`;
/* ============================== */