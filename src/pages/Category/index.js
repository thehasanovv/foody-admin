import StickyHeadTable from '../../components/Table';
import category from '../../mocks/category/category.json';
import { useState, useEffect } from 'react';

const Category = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(category.categories);
  }, []);

  //headers
  const columns = [
    { id: 'id', label: 'ID', minWidth: 40 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'slug', label: 'Slug', minWidth: 100 },
    { id: 'img_url', label: 'Image', minWidth: 100 },
  ];

  return <StickyHeadTable columns={columns} rows={rows} />;
};

export default Category;
