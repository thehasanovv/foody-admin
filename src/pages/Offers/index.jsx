import axios from "axios";
import Button from "../../components/Button";
import StickyHeadTable from "../../components/Table";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import OffersFormContainer from "../../components/SectionFormContainer/OffersFormContainer";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useTranslation } from "react-i18next";
import { ModalContent } from "../../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { getOffers, deleteOffer } from "../../store/slicers/OfferSlice";
import { DrawerContent } from "../../components/Drawer";
// dummy-data
import offersData from "../../mocks/offer/offer.json";
// offersData.offers

const Offers = () => {
  const { setOpenDrawer } = useContext(DrawerContext);
  const dispatch = useDispatch();
  const { t } = useTranslation("translation");

  useEffect(() => {
    axios(
      "https://foody-delivery-admin-default-rtdb.firebaseio.com/offers.json"
    ).then((response) => {
      const loadedData = Object.values(response.data.offers);
      dispatch(getOffers(loadedData));
    });
  }, [dispatch]);

  const rows = useSelector((state) => state.offer.offers);
  return (
    <>
      <ModalContent
        title={t("title delete")}
        subtitle={t("subtitle offer delete")}
        rm={deleteOffer}
      />
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
