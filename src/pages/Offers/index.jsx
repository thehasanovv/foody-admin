import axios from "axios";
import Button from "../../components/Button";
import StickyHeadTable from "../../components/Table";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { getOffers, deleteOffer } from "../../store/slicers/OfferSlice";
import { DrawerContent } from "../../components/Drawer";
import OffersFormContainer from "../../components/SectionFormContainer/OffersFormContainer";

const Offers = () => {
  const { setOpenDrawer } = useContext(DrawerContext);
  const dispatch = useDispatch();
  const { t } = useTranslation("translation");

  useEffect(() => {
    axios("http://127.0.0.1:5500/src/mocks/offer/offer.json").then((response) =>
      dispatch(getOffers(response.data.offers))
    );
  }, [dispatch]);

  const rows = useSelector((state) => state.offer.offers);
  return (
    <>
      <DrawerContent rotate="right">
        <OffersFormContainer />
      </DrawerContent>
      <SectionHeaderContainer>
        <h2>{t("menu.offers")}</h2>
        <Button onClick={setOpenDrawer.bind(null, true)}>
          {t("add offer")}
        </Button>
      </SectionHeaderContainer>
      {rows ? (
        <StickyHeadTable rm={deleteOffer} rows={rows} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Offers;
