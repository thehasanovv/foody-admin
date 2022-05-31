import Button from "../../components/Button";
import axios from "axios";
import StickyHeadTable from "../../components/Table";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import CategoryFormContainer from "../../components/SectionFormContainer/CategoryFormContainer";
import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DrawerContent } from "../../components/Drawer";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import {
  getCategories,
  deleteCategory,
} from "../../store/slicers/CategorySlice";

const Category = () => {
  const { setOpenDrawer } = useContext(DrawerContext);
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.category.categories);
  const { t } = useTranslation("translation");

  useEffect(() => {
    axios("http://127.0.0.1:5500/src/mocks/category/category.json").then(
      (response) => dispatch(getCategories(response.data.categories))
    );
  }, [dispatch]);

  return (
    <>
      <DrawerContent rotate="right">
        <CategoryFormContainer />
      </DrawerContent>
      <SectionHeaderContainer>
        <h2>{t("menu.category")}</h2>
        <Button onClick={setOpenDrawer.bind(null, true)}>
          {t("add category")}
        </Button>
      </SectionHeaderContainer>
      {rows && <StickyHeadTable rm={deleteCategory} rows={rows} />}
    </>
  );
};

export default Category;
