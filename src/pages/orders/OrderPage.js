import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { editOrder, getOrder } from "../../actions/orderActions";
import { Error } from "../../components/messages";
import Order from "../../components/pages/orders/Order";
import OrderLoader from "../../components/pages/orders/OrderLoader";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import routes, { generateRoute } from "../../utils/routes";

const OrderPage = () => {
  const [status, setStatus] = useState("");

  const { businessId, orderId } = useParams();

  const { loading, order, error } = useSelector((state) => state.getOrder);
  const {
    loading: updateLoading,
    order: updateOrder,
    error: updateError,
  } = useSelector((state) => state.editOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, [orderId, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status === order.status) {
      return;
    }

    const formData = new FormData();
    formData.append("status", status);

    dispatch(editOrder(formData, order._id));
  };

  if (updateOrder) {
    return (
      <Navigate
        to={generateRoute(routes.getOrders, {
          ":businessId": businessId,
        })}
      />
    );
  }
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
        {loading && updateLoading && <OrderLoader />}
        {error && updateError && <Error />}
        {order && (
          <Order
            order={order}
            handleSubmit={handleSubmit}
            status={status}
            setStatus={setStatus}
          />
        )}
      </section>
    </main>
  );
};

export default OrderPage;
