import styled from "styled-components";
import Logo from "./Logo";
import Button from "../Button";
import User from "./User";
import Lang from "./Lang";
import { useContext } from "react";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import { DrawerContent } from "../Drawer";
import ProductFormContainer from "../SectionFormContainer/ProductFormContainer";

const Header = () => {
  const { openProductDrawer, setOpenProductDrawer } = useContext(DrawerContext);
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
      <ContainerHeader>
        <Logo />
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
    display: block;
    margin-right: auto;
  }
`;

export default Header;
