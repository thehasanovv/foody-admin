import React, { createContext, useState } from 'react';

export const DrawerContext = createContext(false);

export const DrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
