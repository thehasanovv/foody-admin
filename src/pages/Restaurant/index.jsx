import Button from "../../components/Button";
import RestaurantCards from "../../components/Cards/RestaurantCards";
import RestaurantFormContainer from "../../components/SectionFormContainer/RestaurantFormContainer";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import restaurant from "../../mocks/restaurant/rest.json";
import { useContext } from "react";
import { DrawerContent } from "../../components/Drawer";
import { DrawerContext } from "../../contextApi/DrawerContext";

const Restaurants = () => {
  const { openDrawer, setOpenDrawer } = useContext(DrawerContext);

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
      <RestaurantCards datas={restaurant.restaurants} />
    </>
  );
};

export default Restaurants;
