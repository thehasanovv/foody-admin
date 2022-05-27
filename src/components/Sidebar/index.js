import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import { useTranslation } from "react-i18next";
import {
  MdDashboard,
  MdOutlineProductionQuantityLimits,
  MdRestaurant,
  MdCategory,
  MdOutlineReorder,
  MdLocalOffer,
  MdLogout,
} from "react-icons/md";

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
  const { t } = useTranslation("translation", { keyPrefix: "menu" });
  return (
    //prettier-ignore
    <SidebarContainer>
      <SidebarItem icon={<MdDashboard />} title={t("dashboard")} path="/" />
      <SidebarItem icon={<MdOutlineProductionQuantityLimits />} title={t("products")} path="/products" />
      <SidebarItem icon={<MdRestaurant />} title={t("restaurants")}  path="/restaurants" />
      <SidebarItem icon={<MdCategory />} title={t("category")} path="/category" />
      <SidebarItem icon={<MdOutlineReorder />} title={t("orders")} path="/orders" />
      <SidebarItem icon={<MdLocalOffer />} title={t("offers")} path="/offers" />
      <SidebarItem icon={<MdLogout />} title={t("logout")} path="/logout"/>
    </SidebarContainer>
  );
};

export default Sidebar;
