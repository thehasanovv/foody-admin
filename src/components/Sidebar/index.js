import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const SidebarContainer = styled.div`
  width: 90%;
  height: 450px;
  padding: 1.5rem 0;
  border-radius: 0.7rem;
  text-decoration: none !important;
  color: ${({ theme }) => theme.cSidebarText};
  background: ${({ theme }) => theme.bgSidebar};

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItems />
    </SidebarContainer>
  );
};

export default Sidebar;
