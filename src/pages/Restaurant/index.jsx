import Button from "../../components/Button";
import Pagi from "../../components/Pagination";
import RestaurantFormContainer from "../../components/SectionFormContainer/RestaurantFormContainer";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { useContext, useEffect } from "react";
import { DrawerContent } from "../../components/Drawer";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurantData } from "../../store/actions/restaurantActions";
import { ModalContent } from "../../components/Modal";
import { deleteRestaurant } from "../../store/slicers/RestaurantSlice";

const Restaurants = () => {
  const restaurants = useSelector((state) => state.restaurant.restaurants);
  const { setOpenDrawer } = useContext(DrawerContext);
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurantData());
  }, [dispatch]);

  return (
    <>
      <ModalContent
        title={t("title delete")}
        subtitle={t("subtitle restaurant delete")}
        rm={deleteRestaurant}
      />
      {/* Section Form Drawer  */}
      <DrawerContent rotate="right">
        <RestaurantFormContainer />
      </DrawerContent>
      {/* Section Header  */}
      <SectionHeaderContainer>
        <h2>{t("menu.restaurants")}</h2>
        <Button onClick={setOpenDrawer.bind(null, true)}>
          {t("add restaurant")}
        </Button>
      </SectionHeaderContainer>
      {/* Section Product Cards  */}
      <Pagi data={restaurants} comp={"restaurant"} per_page={4} />
    </>
  );
};

export default Restaurants;
