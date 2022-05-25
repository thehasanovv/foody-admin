import axios from "axios";
import Button from "../../components/Button";
import RestaurantCards from "../../components/Cards/RestaurantCards";
import RestaurantFormContainer from "../../components/SectionFormContainer/RestaurantFormContainer";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { useContext, useEffect } from "react";
import { DrawerContent } from "../../components/Drawer";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../../store/slices/RestaurantSlice";

const Restaurants = () => {
  const { openDrawer, setOpenDrawer } = useContext(DrawerContext);
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurant.restaurants);

  useEffect(() => {
    axios("http://127.0.0.1:5500/src/mocks/restaurant/rest.json").then(
      (response) => dispatch(getRestaurants(response.data.restaurants))
    );
  }, [dispatch]);

  const handleClose = () => {
    setOpenDrawer(false);
  };

  const handleOpen = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      {/* Section Form Drawer  */}
      <DrawerContent rotate="right" isOpen={openDrawer} setIsOpen={handleClose}>
        <RestaurantFormContainer />
      </DrawerContent>
      {/* Section Header  */}
      <SectionHeaderContainer>
        <h2>Restaurants</h2>
        <Button onClick={handleOpen}>Add Restaurant</Button>
      </SectionHeaderContainer>
      {/* Section Product Cards  */}
      {restaurants && <RestaurantCards datas={restaurants} />}
    </>
  );
};

export default Restaurants;
