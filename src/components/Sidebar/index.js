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
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 80%;
  height: 450px;
  background: ${({ theme }) => theme.bgSidebar};
  color: ${(props) => props.theme.cSidebarText};
  border-radius: 0.7rem;
  padding: 1.5rem 0;
  text-decoration: none !important;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavLink to="/">
        <SidebarItem icon={<MdDashboard />} title="Dashboard" />
      </NavLink>
      <NavLink to="/products">
        <SidebarItem icon={<MdOutlineProductionQuantityLimits />} title="Products" />
      </NavLink>
      <NavLink to="/restaurants">
        <SidebarItem icon={<MdRestaurant />} title="Restaurants" />
      </NavLink>
      <NavLink to="/category">
        <SidebarItem icon={<MdCategory />} title="Category" />
      </NavLink>
      <NavLink to="/orders">
        <SidebarItem icon={<MdOutlineReorder />} title="Orders" />
      </NavLink>
      <NavLink to="/offers">
        <SidebarItem icon={<MdLocalOffer />} title="Offers" />
      </NavLink>

      <SidebarItem icon={<MdLogout />} title="Logout" />
    </SidebarContainer>
  );
};

export default Sidebar;
