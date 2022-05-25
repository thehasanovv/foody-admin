import axios from "axios";
import StickyHeadTable from "../../components/Table";
import order from "../../mocks/order/order.json";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { getOrders } from "../../store/slices/OrderSlice";
import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Order = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.order.orders);

  useEffect(() => {
    axios("http://127.0.0.1:5500/src/mocks/order/order.json").then((response) =>
      dispatch(getOrders(response.data.orders))
    );
  }, [dispatch]);

  return (
    <>
      <SectionHeaderContainer>
        <h2>Orders</h2>
      </SectionHeaderContainer>
      {rows && <StickyHeadTable rows={rows} />}
    </>
  );
};

export default Order;
