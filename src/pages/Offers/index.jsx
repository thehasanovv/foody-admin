import axios from 'axios';
import Button from '../../components/Button';
import offer from '../../mocks/offer/offer.json';
import StickyHeadTable from '../../components/Table';
import SectionHeaderContainer from '../../components/SectionHeaderContainer';
import { DrawerContext } from '../../contextApi/DrawerContext';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useContext, useEffect } from 'react';
import { getOffers, deleteOffer } from '../../store/slicers/OfferSlice';

const Offers = () => {
  const ctx = useContext(DrawerContext);

  const dispatch = useDispatch();

  const rows = useSelector((state) => state.offer.offers);
  useEffect(() => {
    axios('http://127.0.0.1:5500/src/mocks/offer/offer.json').then((response) =>
      dispatch(getOffers(response.data.offers)),
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
        <h2>Offers</h2>
        <Button onClick={handleOpen}>Add Category</Button>
      </SectionHeaderContainer>
      {rows ? <StickyHeadTable rm={deleteOffer} rows={rows} /> : 'Loading...'}
    </>
  );
};

export default Offers;
