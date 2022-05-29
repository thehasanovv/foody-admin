import axios from "axios";
import ProductCards from "../../components/Cards/ProductCards";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteProduct } from "../../store/slicers/ProductSlice";
import productsMock from "../../mocks/product/product.json";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();

  useEffect(() => {
    axios("http://127.0.0.1:5500/src/mocks/product/product.json").then(
      (response) => dispatch(getProducts(response.data.products))
    );
  }, [dispatch]);

  return (
    <>
      {/* Section Header  */}
      <SectionHeaderContainer>
        <h2>{t("menu.products")}</h2>
      </SectionHeaderContainer>
      {/* Section Product Cards  */}
      {products && <ProductCards rm={deleteProduct} datas={products} />}
    </>
  );
};

export default Products;
