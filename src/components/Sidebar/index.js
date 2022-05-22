import styled from 'styled-components';
import SidebarItem from './SidebarItem';
import {
  MdDashboard,
  MdOutlineProductionQuantityLimits,
  MdRestaurant,
  MdCategory,
  MdOutlineReorder,
  MdLocalOffer,
  MdLogout,
} from 'react-icons/md';

const SidebarContainer = styled.div`
  width: 80%;
  height: 450px;
  background: ${({ theme }) => theme.bgSidebar};
  color: ${(props) => props.theme.cSidebarText};
  border-radius: 0.7rem;
  padding: 1.5rem 0;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem icon={<MdDashboard />} title="Dashboard" />
      <SidebarItem icon={<MdOutlineProductionQuantityLimits />} title="Products" />
      <SidebarItem icon={<MdRestaurant />} title="Restaurants" />
      <SidebarItem icon={<MdCategory />} title="Category" />
      <SidebarItem icon={<MdOutlineReorder />} title="Orders" />
      <SidebarItem icon={<MdLocalOffer />} title="Offers" />
      <SidebarItem icon={<MdLogout />} title="Logout" />
    </SidebarContainer>
  );
};

export default Sidebar;
