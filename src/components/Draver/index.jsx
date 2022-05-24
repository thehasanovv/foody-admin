import { Drawer } from '@material-ui/core';
import { Button as MButton } from '@mui/material';
import React, { useContext } from 'react';
import Login from '../../pages/Login';
import Button from '../Header/Button';
import { DrawerContainer, DTitle, DSubContainer, DSubTitle, Panel } from './DrawerStyle';
//import context api
import { DrawerContext } from '../../contextApi/DrawerContext';
export const Draw = ({ title, subTitle, subTitle2, onSubmit }) => {
  const { openDrawer, setOpenDrawer } = useContext(DrawerContext);

  return (
    <>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <DrawerContainer>
          {/* Title */}
          <DTitle>{title}</DTitle>
          {/* ===================================================== */}
          {/* SubTitle */}
          <DSubContainer>
            <DSubTitle>{subTitle}</DSubTitle>
            {/* Suvtitle content */}
            <Panel>
              <input type="text" placeholder="Search" />
              {/* <button type="submit">Search</button> */}
            </Panel>
          </DSubContainer>
          {/* ===================================================== */}
          {/* SubTitle2 */}
          <DSubContainer>
            <DSubTitle>{subTitle2}</DSubTitle>
            {/* Subtitle content */}
            <Panel>
              <div>
                <Login />
              </div>
            </Panel>
          </DSubContainer>
          {/* ===================================================== */}
          {/* Button */}
          <DSubContainer>
            {/*  <button type="">Cancel</button> */}
            <Button width={50} type="submit" onClick={onSubmit} className="registerButton">
              Register
            </Button>
            {/* Buttons */}
          </DSubContainer>
        </DrawerContainer>
      </Drawer>
    </>
  );
};
