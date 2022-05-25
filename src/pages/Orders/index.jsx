import StickyHeadTable from "../../components/Table";
import order from "../../mocks/order/order.json";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";

const Order = () => {
  return (
    <>
      <SectionHeaderContainer>
        <h2>Orders</h2>
      </SectionHeaderContainer>
      <StickyHeadTable rows={order.orders} />;
    </>
  );
};

export default Order;
