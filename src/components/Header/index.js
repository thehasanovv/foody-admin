import styled from "styled-components";
import Logo from "./Logo";
import Button from "../Button";
import User from "./User";
import Lang from "./Lang";
import ProductFormContainer from "../SectionFormContainer/ProductFormContainer";
import Sidebar from "../Sidebar";
import { useContext } from "react";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import { DrawerContent } from "../Drawer";
import { RiMenuAddFill } from "react-icons/ri";
import { IconButton } from "@mui/material";
const Header = () => {
  const {
    openProductDrawer,
    setOpenProductDrawer,
    openMenuDrawer,
    setOpenMenuDrawer,
  } = useContext(DrawerContext);
  let { t } = useTranslation("translation");

  return (
    <>
      {/* Section Form Drawer  */}
      <DrawerContent
        rotate="right"
        isOpen={openProductDrawer}
        setIsOpen={setOpenProductDrawer}
      >
        <ProductFormContainer setIsOpen={setOpenProductDrawer} />
      </DrawerContent>

      {/* Section Menu Drawer  */}
      <DrawerContent
        rotate="left"
        isOpen={openMenuDrawer}
        setIsOpen={setOpenMenuDrawer}
      >
        <Sidebar />
      </DrawerContent>

      <ContainerHeader>
        <div>
          <SidebarIcon onClick={setOpenMenuDrawer.bind(null, true)}>
            <IconButton>
              <RiMenuAddFill />
            </IconButton>
          </SidebarIcon>
          <Logo />
        </div>
        <Button onClick={setOpenProductDrawer.bind(null, true)}>
          {t("add product")}
        </Button>
        <Lang />
        <User />
      </ContainerHeader>
    </>
  );
};

const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) => theme.primary};

  padding: 0.5rem 1.2rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  height: 4.5rem;

  & > :first-child {
    display: flex;
    margin-right: auto;
    align-items: center;
  }
`;

const SidebarIcon = styled.div`
  display: none;
  margin-right: 1rem;
  font-size: 1.33rem;
  margin-bottom: 5px;

  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export default Header;
