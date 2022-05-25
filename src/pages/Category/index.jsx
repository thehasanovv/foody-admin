import Button from "../../components/Button";
import StickyHeadTable from "../../components/Table";
import category from "../../mocks/category/category.json";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { useState } from "react";

const Category = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <SectionHeaderContainer>
        <h2>Category</h2>
        <Button onClick={handleOpen}>Add Category</Button>
      </SectionHeaderContainer>
      <StickyHeadTable rows={category.categories} />;
    </>
  );
};

export default Category;
