import Button from '../../components/Button';
import ProductCards from '../../components/Cards/ProductCards';
import ProductFormContainer from '../../components/SectionFormContainer/ProductFormContainer';
import SectionHeaderContainer from '../../components/SectionHeaderContainer';
import product from '../../mocks/product/product.json';
import { useContext, useEffect } from 'react';
import { DrawerContent } from '../../components/Drawer';
import { DrawerContext } from '../../contextApi/DrawerContext';
import axios from 'axios';

//redux

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../store/slices/ProductSlice';

const Products = () => {
  const { openDrawer, setOpenDrawer } = useContext(DrawerContext);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    axios('http://127.0.0.1:5500/src/mocks/product/product.json').then((response) =>
      dispatch(getProducts(response.data.products)),
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
        <ProductFormContainer setIsOpen={handleClose} />
      </DrawerContent>
      {/* Section Header  */}
      <SectionHeaderContainer>
        <h2>Products</h2>
        <Button onClick={handleOpen}>Add Products</Button>
      </SectionHeaderContainer>
      {/* Section Product Cards  */}
      {products && <ProductCards datas={products} />}
    </>
  );
};

export default Products;
