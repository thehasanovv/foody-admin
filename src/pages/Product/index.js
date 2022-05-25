import React from 'react';
import * as Yup from 'yup';
import FormControl from '../../components/Form/FormControl';
import { DrawerContent } from '../../components/Drawer';
import { DrawerForm } from '../../components/Drawer/indexxx';

const Products = () => {
  const initialValues = {
    img: '',
    name: '',
    description: '',
    price: '',
    restaurant: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    restaurant: Yup.string().required('Required'),
  });

  return (
    <div>
      <h1>Products</h1>
      <DrawerContent rotate="right">
        <DrawerForm
          title="Add Product"
          initialValues={initialValues}
          validationSchema={validationSchema}>
          <FormControl control="input" type="text" label="Name" name="name" variant="outlined" />
          <FormControl
            control="input"
            type="text"
            label="Description"
            name="description"
            variant="outlined"
          />
          <FormControl
            control="input"
            type="number"
            label="Price $"
            name="price"
            variant="outlined"
          />
          <FormControl
            control="input"
            type="number"
            label="Price $"
            name="price"
            variant="outlined"
          />
        </DrawerForm>
      </DrawerContent>
    </div>
  );
};

export default Products;
