import { createContext, useState } from "react";

export const DrawerContext = createContext(false);

export const DrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openProductDrawer, setOpenProductDrawer] = useState(false);

  return (
    <DrawerContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        openProductDrawer,
        setOpenProductDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
