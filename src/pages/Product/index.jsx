import Button from "../../components/Button";
import ProductCards from "../../components/Cards/ProductCards";
import ProductFormContainer from "../../components/SectionFormContainer/ProductFormContainer";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import product from "../../mocks/product/product.json";
import { useContext } from "react";
import { DrawerContent } from "../../components/Drawer";
import { DrawerContext } from "../../contextApi/DrawerContext";

const Products = () => {
  const { openDrawer, setOpenDrawer } = useContext(DrawerContext);

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      {/* Section Form Drawer  */}
      <DrawerContent rotate="right" isOpen={openDrawer} setIsOpen={handleClose}>
        <ProductFormContainer />
      </DrawerContent>
      {/* Section Header  */}
      <SectionHeaderContainer>
        <h2>Products</h2>
        <Button onClick={setOpenDrawer.bind(null, true)}>Add Products</Button>
      </SectionHeaderContainer>
      {/* Section Product Cards  */}
      <ProductCards datas={product.products} />
    </>
  );
};

export default Products;
