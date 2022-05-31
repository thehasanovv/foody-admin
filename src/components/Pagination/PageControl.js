import ProductCards from "../../components/Cards/ProductCards";
import RestaurantCards from "../../components/Cards/RestaurantCards";
import { deleteProduct } from "../../store/slicers/ProductSlice";
import { deleteRestaurant } from "../../store/slicers/RestaurantSlice";

const PageControl = ({ comp, datas }) => {
  switch (comp) {
    case "product":
      return datas && <ProductCards rm={deleteProduct} datas={datas} />;
    case "restaurant":
      return datas && <RestaurantCards rm={deleteRestaurant} datas={datas} />;
  }
};

export default PageControl;
