import Button from "../../components/Button";
import RestaurantCards from "../../components/Cards/RestaurantCards";
import RestaurantFormContainer from "../../components/SectionFormContainer/RestaurantFormContainer";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { useContext, useEffect } from "react";
import { DrawerContent } from "../../components/Drawer";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { deleteRestaurant } from "../../store/slicers/RestaurantSlice";
import { fetchRestaurantData } from "../../store/actions/restaurantActions";

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
      {restaurants && (
        <RestaurantCards rm={deleteRestaurant} datas={restaurants} />
      )}
    </>
  );
};

export default Restaurants;
