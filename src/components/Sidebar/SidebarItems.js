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

const SidebarItems = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'menu' });

  return (
    //prettier-ignore
    <>
      <SidebarItem icon={<MdDashboard />} title={t("dashboard")} path="/panel/dashboard" />
      <SidebarItem icon={<MdOutlineProductionQuantityLimits />} title={t("products")} path="/panel/products" />
      <SidebarItem icon={<MdRestaurant />} title={t("restaurants")}  path="/panel/restaurants" />
      <SidebarItem icon={<MdCategory />} title={t("category")} path="/panel/category" />
      <SidebarItem icon={<MdOutlineReorder />} title={t("orders")} path="/panel/orders" />
      <SidebarItem icon={<MdLocalOffer />} title={t("offers")} path="/panel/offers" />
      <SidebarItem icon={<MdLogout />} title={t("logout")} path="/logout"/></>
  );
};

export default SidebarItems;
