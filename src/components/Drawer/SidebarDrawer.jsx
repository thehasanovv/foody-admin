import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useContext } from "react";
import { DrawerContext } from "../../contextApi/DrawerContext";

export const SidebarDrawerContent = ({ rotate, children }) => {
  const { openMenuDrawer, setOpenMenuDrawer } = useContext(DrawerContext);

  return (
    <Drawer
      anchor={rotate}
      disableScrollLock={true}
      open={openMenuDrawer}
      onClose={() => setOpenMenuDrawer()}
    >
      {children}
    </Drawer>
  );
};
