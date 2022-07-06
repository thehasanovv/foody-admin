import axios from "axios";
import StickyHeadTable from "../../components/Table";
import SectionHeaderContainer from "../../components/SectionHeaderContainer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ModalContent } from "../../components/Modal";
import { getOrders, deleteOrder } from "../../store/slicers/OrderSlice";
import { useSelector, useDispatch } from "react-redux";

const Order = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.order.orders);
  const { t } = useTranslation("translation");

  useEffect(() => {
    axios(
      "https://foody-delivery-admin-default-rtdb.firebaseio.com/orders.json"
    ).then((response) => {
      const loadedData = Object.values(response.data.orders);
      dispatch(getOrders(loadedData));
    });
  }, [dispatch]);

  return (
    <>
      <ModalContent
        title={t("title delete")}
        subtitle={t("subtitle order delete")}
        rm={deleteOrder}
      />
      <SectionHeaderContainer>
        <h2>{t("menu.orders")}</h2>
      </SectionHeaderContainer>
      {rows && <StickyHeadTable rm={deleteOrder} rows={rows} />}
    </>
  );
};

export default Order;
