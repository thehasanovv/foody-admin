import ProductCards from '../../components/Cards/ProductCards';
import SectionHeaderContainer from '../../components/SectionHeaderContainer';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/slicers/ProductSlice';
import { fetchProductData } from '../../store/actions/productActions';
import Pagi from '../../components/Pagination';
// import productsMock from "../../mocks/product/product.json";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  console.log(products);
  return (
    <>
      {/* Section Header  */}
      <SectionHeaderContainer>
        <h2>{t('menu.products')}</h2>
      </SectionHeaderContainer>
      {/* Section Product Cards  */}
      {products && <ProductCards rm={deleteProduct} datas={products} />}
      <Pagi data={products} />
    </>
  );
};

export default Products;
