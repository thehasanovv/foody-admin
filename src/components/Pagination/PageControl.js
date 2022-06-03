import ProductCards from "../../components/Cards/ProductCards";
import RestaurantCards from "../../components/Cards/RestaurantCards";

const PageControl = ({ comp, datas }) => {
  switch (comp) {
    case "product":
      return datas && <ProductCards datas={datas} />;
    case "restaurant":
      return datas && <RestaurantCards datas={datas} />;
  }
};

export default PageControl;
