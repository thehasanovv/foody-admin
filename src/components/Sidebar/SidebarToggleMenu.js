import React from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useContext } from "react";
import { DrawerContext } from "../../contextApi/DrawerContext";

const SidebarContainer = styled.div`
  width: 75vw;
  height: 100vh;
  background: ${({ theme }) => theme.bgSidebar};
`;

const Wrapper = styled.div`
  margin-top: 2rem;

  & > div {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    cursor: pointer;
    margin-bottom: 0.6rem;

    & > svg {
      color: white;
      margin: 0 0.5rem 0 0.9rem;
    }

    img {
      margin-top: 5px;
    }
  }
`;

const SidebarToggleMenu = () => {
  const { setOpenMenuDrawer } = useContext(DrawerContext);

  return (
    <SidebarContainer>
      <Wrapper>
        <div onClick={setOpenMenuDrawer.bind(null, false)}>
          <ArrowBackIosNewIcon />
          <img src="/images/logo.svg" />
        </div>
        <SidebarItems />
      </Wrapper>
    </SidebarContainer>
  );
};

export default SidebarToggleMenu;
