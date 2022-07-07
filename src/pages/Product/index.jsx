import Pagi from "../../components/Pagination";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import Loading from "../../components/Loading";
import { ModalContent } from "../../components/Modal";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  fetchProductData,
  removeProductData,
} from "../../store/actions/productActions";
import { deleteProduct } from "../../store/slicers/ProductSlice";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const { products, loading } = useSelector((state) => state.product);
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <>
      <ModalContent
        title={t("title delete")}
        subtitle={t("subtitle product delete")}
        rm={removeProductData}
      />
      {/* Section Header  */}
      <SectionHeaderContainer>
        <h2>{t("menu.products")}</h2>
      </SectionHeaderContainer>

      {loading && <Loading />}
      {!loading && products.length === 0 && (
        <p style={{ textAlign: "center" }}>No Product</p>
      )}
      {!loading && products.length !== 0 && (
        <Pagi data={products} comp={"product"} per_page={5} />
      )}
    </>
  );
};

export default Products;
