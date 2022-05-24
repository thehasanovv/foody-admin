import React from 'react';
import * as Yup from 'yup';
import FormControl from '../../components/Form/FormControl';
import { DrawerContent } from '../../components/Drawer';
import { DrawerForm } from '../../components/Drawer/indexxx';

const Products = (props) => {
  const initialValues = {
    email: '',
    img: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
  });

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={handleOpen}>Add Products</button>
      <DrawerContent rotate="right" isOpen={open} setIsOpen={handleClose}>
        <DrawerForm
          title="Add Product"
          subTitle="Upload your image"
          subTitle2="Add your description and necessary information"
          setIsOpen={handleClose}
          initialValues={initialValues}
          validationSchema={validationSchema}>
          <FormControl control="input" type="email" label="Email" name="email" variant="outlined" />
        </DrawerForm>
      </DrawerContent>
    </div>
  );
};

export default Products;
