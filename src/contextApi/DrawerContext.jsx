import { createContext, useState } from "react";

export const DrawerContext = createContext(false);

export const DrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openProductDrawer, setOpenProductDrawer] = useState(false);
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteProductModalID, setDeleteProductModalID] = useState("");

  return (
    <DrawerContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        openProductDrawer,
        setOpenProductDrawer,
        openMenuDrawer,
        setOpenMenuDrawer,
        openDeleteModal,
        setOpenDeleteModal,
        deleteProductModalID,
        setDeleteProductModalID,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
