import StickyHeadTable from "../../components/Table";
import category from "../../mocks/category/category.json";

const Category = () => {
  return <StickyHeadTable rows={category.categories} />;
};

export default Category;
