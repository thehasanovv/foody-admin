import axios from "axios";
import StickyHeadTable from "../../components/Table";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { getOrders, deleteOrder } from "../../store/slicers/OrderSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

const Order = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.order.orders);
  const { t } = useTranslation("translation");

  useEffect(() => {
    axios("http://127.0.0.1:5500/src/mocks/order/order.json").then((response) =>
      dispatch(getOrders(response.data.orders))
    );
  }, [dispatch]);

  return (
    <>
      <SectionHeaderContainer>
        <h2>{t("menu.orders")}</h2>
      </SectionHeaderContainer>
      {rows && <StickyHeadTable rm={deleteOrder} rows={rows} />}
    </>
  );
};

export default Order;
