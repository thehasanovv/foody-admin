import React from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const SidebarContainer = styled.div`
  width: 75vw;
  height: 100vh;
  background: ${({ theme }) => theme.bgSidebar};
`;

const SidebarToggleMenu = () => {
  return (
    <SidebarContainer>
      <SidebarItems />
    </SidebarContainer>
  );
};

export default SidebarToggleMenu;
