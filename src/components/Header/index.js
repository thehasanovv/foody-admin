import styled from "styled-components";
import Logo from "./Logo";
import Button from "../Button";
import User from "./User";
import Lang from "./Lang";
import ProductFormContainer from "../SectionFormContainer/ProductFormContainer";
import SidebarToggleMenu from "../Sidebar/SidebarToggleMenu";
import { useContext } from "react";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import { DrawerContent } from "../Drawer";
import { RiMenuAddFill } from "react-icons/ri";
import { IconButton } from "@mui/material";
import { SidebarDrawerContent } from "../Drawer/SidebarDrawer";

const Header = () => {
  const { t } = useTranslation("translation");
  const { openProductDrawer, setOpenProductDrawer, setOpenMenuDrawer } =
    useContext(DrawerContext);

  return (
    <>
      {/* Section Form Drawer  */}
      {
        <DrawerContent
          rotate="right"
          isOpen={openProductDrawer}
          setIsOpen={setOpenProductDrawer}
        >
          <ProductFormContainer setIsOpen={setOpenProductDrawer} />
        </DrawerContent>
      }

      {/* Section Menu Drawer  */}
      <SidebarDrawerContent rotate="left">
        <SidebarToggleMenu />
      </SidebarDrawerContent>

      <ContainerHeader>
        <div>
          <SidebarIcon onClick={setOpenMenuDrawer.bind(null, true)}>
            <IconButton>
              <RiMenuAddFill />
            </IconButton>
          </SidebarIcon>
          <Logo />
        </div>
        <HeaderButton onClick={setOpenProductDrawer.bind(null, true)}>
          <span>{t("add product")}</span>
          <span>{"+"}</span>
        </HeaderButton>
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

  & svg {
    color: white;
  }
`;

const SidebarIcon = styled.div`
  display: none;
  margin-left: -1rem;
  font-size: 1.33rem;
  margin-bottom: 5px;

  @media screen and (max-width: 992px) {
    display: block;
  }
`;

const HeaderButton = styled(Button)`
  & span:nth-child(2) {
    display: none;
  }

  @media screen and (max-width: 576px) {
    padding: 0;
    border-radius: 50%;
    width: 2.7rem;
    height: 2.7rem;

    & span:first-child {
      display: none;
    }

    & span:nth-child(2) {
      display: block;
    }
  }
`;

export default Header;
