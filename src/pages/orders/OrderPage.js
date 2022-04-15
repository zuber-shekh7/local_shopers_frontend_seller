import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrder } from "../../actions/orderActions";
import { Error } from "../../components/messages";
import Order from "../../components/pages/orders/Order";
import OrderLoader from "../../components/pages/orders/OrderLoader";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import routes, { generateRoute } from "../../utils/routes";

const OrderPage = () => {
  const { businessId, orderId } = useParams();

  const { loading, order, error } = useSelector((state) => state.getOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, [orderId, dispatch]);

  return (
    <main>
      <HeaderContainer>
        <h1>Order Summary</h1>
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
              to: generateRoute(routes.getOrders, {
                ":businessId": businessId,
              }),
            },
            {
              name: order ? order._id : "summary",
              to: "",
            },
          ]}
        />
        {loading && <OrderLoader />}
        {error && <Error />}
        {order && <Order order={order} />}
      </section>
    </main>
  );
};

export default OrderPage;
