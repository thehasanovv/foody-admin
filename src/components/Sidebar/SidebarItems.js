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

const SidebarItems = () => {
  const { t } = useTranslation("translation", { keyPrefix: "menu" });

  return (
    //prettier-ignore
    <>
      <SidebarItem icon={<MdDashboard />} title={t("dashboard")} path="/" />
      <SidebarItem icon={<MdOutlineProductionQuantityLimits />} title={t("products")} path="/products" />
      <SidebarItem icon={<MdRestaurant />} title={t("restaurants")}  path="/restaurants" />
      <SidebarItem icon={<MdCategory />} title={t("category")} path="/category" />
      <SidebarItem icon={<MdOutlineReorder />} title={t("orders")} path="/orders" />
      <SidebarItem icon={<MdLocalOffer />} title={t("offers")} path="/offers" />
      <SidebarItem icon={<MdLogout />} title={t("logout")} path="/logout"/></>
  );
};

export default SidebarItems;
