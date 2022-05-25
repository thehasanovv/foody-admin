import axios from "axios";
import Button from "../../components/Button";
import StickyHeadTable from "../../components/Table";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { getOffers, deleteOffer } from "../../store/slicers/OfferSlice";
import { DrawerContent } from "../../components/Drawer";
import OffersFormContainer from "../../components/SectionFormContainer/OffersFormContainer";

const Offers = () => {
  const { setOpenDrawer } = useContext(DrawerContext);

  const dispatch = useDispatch();

  const rows = useSelector((state) => state.offer.offers);
  useEffect(() => {
    axios("http://127.0.0.1:5500/src/mocks/offer/offer.json").then((response) =>
      dispatch(getOffers(response.data.offers))
    );
  }, [dispatch]);

  return (
    <>
      <DrawerContent rotate="right">
        <OffersFormContainer />
      </DrawerContent>
      <SectionHeaderContainer>
        <h2>Offers</h2>
        <Button onClick={setOpenDrawer.bind(null, true)}>Add Category</Button>
      </SectionHeaderContainer>
      {rows ? <StickyHeadTable rm={deleteOffer} rows={rows} /> : "Loading..."}
    </>
  );
};

export default Offers;
