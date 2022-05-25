import Button from "../../components/Button";
import StickyHeadTable from "../../components/Table";
import offer from "../../mocks/offer/offer.json";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { DrawerContext } from "../../contextApi/DrawerContext";
import { useState, useContext } from "react";

const Offers = () => {
  // const ctx = useContext(DrawerContext);

  const [open, setOpen] = useState(false);

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
      <StickyHeadTable rows={offer.offers} />;
    </>
  );
};

export default Offers;
