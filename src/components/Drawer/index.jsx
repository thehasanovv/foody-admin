import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { DrawerContext } from '../../contextApi/DrawerContext';

export const DrawerContent = ({ rotate, isOpen, setIsOpen, children }) => {
  const { openDrawer, setOpenDrawer } = React.useContext(DrawerContext);
  return (
    <Drawer anchor={rotate} open={openDrawer} onClose={() => setOpenDrawer(false)}>
      {children}
    </Drawer>
  );
};
