import styled from 'styled-components';

const SidebarItemContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.cSidebarText};
  text-decoration: none !important;
  padding: 0.3rem 0;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    background: ${(props) => props.theme.bgSidebarHover};
    border-radius: 0.5rem;
    padding: 0.3rem 0.2rem;
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

const SidebarItem = ({ icon, title }) => {
  return (
    <SidebarItemContainer>
      <SidebarItemIcon>{icon}</SidebarItemIcon>
      <SidebarItemTitle>{title}</SidebarItemTitle>
    </SidebarItemContainer>
  );
};

export default SidebarItem;
