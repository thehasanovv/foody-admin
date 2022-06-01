import Pagi from "../../components/Pagination";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductData } from "../../store/actions/productActions";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <>
      {/* Section Header  */}
      <SectionHeaderContainer>
        <h2>{t("menu.products")}</h2>
      </SectionHeaderContainer>
      {/* Section Product Cards  */}
      <Pagi data={products} comp={'product'} per_page={5}/>
    </>
  );
};

export default Products;
