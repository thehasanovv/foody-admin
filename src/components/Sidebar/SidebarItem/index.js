import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon, title, path }) => {
  return (
    <SidebarItemContainer to={path}>
      <SidebarItemIcon>{icon}</SidebarItemIcon>
      <SidebarItemTitle>{title}</SidebarItemTitle>
    </SidebarItemContainer>
  );
};

export default SidebarItem;

export const SidebarItemContainer = styled(NavLink)`
  width: 80%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.cSidebarText};
  text-decoration: none !important;
  padding: 0.3rem 0;
  cursor: pointer;
  margin: 0 auto;
  transition: all 0.3s linear;

  &.active {
    background: ${(props) => props.theme.bgSidebarHover};
  }
  &:hover {
    background: ${(props) => props.theme.bgSidebarHover};
    color: ${(props) => props.theme.cSidebarText};
    /* border-radius: 0.5rem; */
  }
`;

const SidebarItemIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 0.2rem 1rem;
  text-decoration: none !important;
`;

const SidebarItemTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none !important;
`;
