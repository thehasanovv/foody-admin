import Button from "../../components/Button";
import StickyHeadTable from "../../components/Table";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import CategoryFormContainer from "../../components/SectionFormContainer/CategoryFormContainer";
import { DrawerContent } from "../../components/Drawer";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import { ModalContent } from "../../components/Modal";
import { deleteCategory } from "../../store/slicers/CategorySlice";
import { fetchCategoryData } from "../../store/actions/categoryActions";
import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Category = () => {
  const rows = useSelector((state) => state.category.categories);
  const { setOpenDrawer } = useContext(DrawerContext);
  const { t } = useTranslation("translation");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, [dispatch]);

  return (
    <>
      <ModalContent
        title={t("title delete")}
        subtitle={t("subtitle category delete")}
        rm={deleteCategory}
      />
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
