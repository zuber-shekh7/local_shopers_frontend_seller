import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions/orderActions";
import { Error } from "../../components/messages";
import OrderList from "../../components/pages/orders/OrderList";
import OrderListLoader from "../../components/pages/orders/OrderListLoader";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import routes from "../../utils/routes";

const OrdersPage = () => {
  const {
    seller: { business },
  } = useSelector((state) => state.sellerLogin);

  const { loading, orders, error } = useSelector((state) => state.getOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(business));
  }, [business, dispatch]);

  return (
    <main>
      <HeaderContainer>
        <h1>Manage Orders</h1>
      </HeaderContainer>
      <section className="container">
        {/* breadcrumb */}
        <Breadcrumb
          links={[
            {
              name: "home",
              to: routes.dashboard,
            },
            {
              name: "orders",
              to: "",
            },
          ]}
        />

        {error && <Error />}
        {loading && <OrderListLoader />}
        {orders && <OrderList orders={orders} />}
      </section>
    </main>
  );
};

export default OrdersPage;
