import StickyHeadTable from "../../components/Table";
import order from "../../mocks/order/order.json";

const Order = () => {
  return <StickyHeadTable rows={order.orders} />;
};

export default Order;
