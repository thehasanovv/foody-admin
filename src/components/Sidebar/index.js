import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const SidebarContainer = styled.div`
  width: 90%;
  height: 450px;
  background: ${({ theme }) => theme.bgSidebar};
  color: ${({ theme }) => theme.cSidebarText};
  border-radius: 0.7rem;
  padding: 1.5rem 0;
  text-decoration: none !important;

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
