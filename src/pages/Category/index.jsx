import Button from '../../components/Button';
import axios from 'axios';
import StickyHeadTable from '../../components/Table';
import SectionHeaderContainer from '../../components/SectionHeaderContainer';
import { getCategories, deleteCategory } from '../../store/slices/CategorySlice';
import { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Category = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.category.categories);

  useEffect(() => {
    axios('http://127.0.0.1:5500/src/mocks/category/category.json').then((response) =>
      dispatch(getCategories(response.data.categories)),
    );
  }, [dispatch]);

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
      {rows && <StickyHeadTable rm={deleteCategory} rows={rows} />}
    </>
  );
};

export default Category;
