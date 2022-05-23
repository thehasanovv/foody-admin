import StickyHeadTable from "../../components/Table";
import offer from "../../mocks/offer/offer.json";

const Offers = () => {
  return <StickyHeadTable rows={offer.offers} />;
};

export default Offers;
