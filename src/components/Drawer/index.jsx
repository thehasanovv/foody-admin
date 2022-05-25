import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useContext } from "react";
import { DrawerContext } from "../../contextApi/DrawerContext";

export const DrawerContent = ({ rotate, isOpen, setIsOpen, children }) => {
  const { openDrawer, setOpenDrawer } = useContext(DrawerContext);

  return (
    <Drawer
      anchor={rotate}
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      {children}
    </Drawer>
  );
};
