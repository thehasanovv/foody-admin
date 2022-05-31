import styled from 'styled-components';
import SidebarItem from './SidebarItem';
import { useTranslation } from 'react-i18next';
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
  width: 90%;
  height: 450px;
  background: ${({ theme }) => theme.bgSidebar};
  color: ${(props) => props.theme.cSidebarText};
  border-radius: 0.7rem;
  padding: 1.5rem 0;
  text-decoration: none !important;
`;

const Sidebar = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'menu' });
  return (
    //prettier-ignore
    <SidebarContainer>
      <SidebarItem icon={<MdDashboard />} title={t("dashboard")} path="/panel" />
      <SidebarItem icon={<MdOutlineProductionQuantityLimits />} title={t("products")} path="/panel/products" />
      <SidebarItem icon={<MdRestaurant />} title={t("restaurants")}  path="/panel/restaurants" />
      <SidebarItem icon={<MdCategory />} title={t("category")} path="/panel/category" />
      <SidebarItem icon={<MdOutlineReorder />} title={t("orders")} path="/panel/orders" />
      <SidebarItem icon={<MdLocalOffer />} title={t("offers")} path="/panel/offers" />
      <SidebarItem icon={<MdLogout />} title={t("logout")} path="/logout"/>
    </SidebarContainer>
  );
};

export default Sidebar;
