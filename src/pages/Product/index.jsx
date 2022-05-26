import axios from 'axios';
import Button from '../../components/Button';
import ProductCards from '../../components/Cards/ProductCards';
import ProductFormContainer from '../../components/SectionFormContainer/ProductFormContainer';
import SectionHeaderContainer from '../../components/SectionHeaderContainer';
import { getProducts, deleteProduct } from '../../store/slicers/ProductSlice';
import { DrawerContent } from '../../components/Drawer';
import { DrawerContext } from '../../contextApi/DrawerContext';
import { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Products = () => {
  const { setOpenDrawer } = useContext(DrawerContext);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    axios('http://127.0.0.1:5500/src/mocks/product/product.json').then((response) =>
      dispatch(getProducts(response.data.products)),
    );
  }, [dispatch]);
  console.log(products);
  return (
    <>
      {/* Section Form Drawer  */}
      <DrawerContent rotate="right">
        <ProductFormContainer />
      </DrawerContent>
      {/* Section Header  */}
      <SectionHeaderContainer>
        <h2>Products</h2>
        <Button onClick={setOpenDrawer.bind(null, true)}>Add Products</Button>
      </SectionHeaderContainer>
      {/* Section Product Cards  */}
      {products && <ProductCards rm={deleteProduct} datas={products} />}
    </>
  );
};

export default Products;
