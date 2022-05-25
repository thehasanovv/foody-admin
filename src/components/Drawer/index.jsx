import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { DrawerContext } from '../../contextApi/DrawerContext';

export const DrawerContent = ({ rotate, children }) => {
  const { openDrawer, setOpenDrawer } = React.useContext(DrawerContext);
  console.log(openDrawer);
  return (
    <Drawer anchor={rotate} open={openDrawer} onClose={() => setOpenDrawer(false)}>
      {children}
    </Drawer>
  );
};
