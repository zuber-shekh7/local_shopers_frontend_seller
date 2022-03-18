import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions/orderActions";
import Breadcrumb from "../../components/shared/Breadcrumb";
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
      <section className="container">
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "your orders",
              to: routes.getOrders,
            },
          ]}
        />
        <h1>Your Orders</h1>
        <hr />
        {error && !loading && (
          <p className="text-center text-red-500">
            Something went wrong. Please try after sometime .
          </p>
        )}
        {loading && !orders && (
          <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
            {[
              ...Array(6)
                .fill(1)
                .map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg hover:bg-gray-100"
                    >
                      <div className="h-4 bg-gray-300 rounded-lg mb-3"></div>
                      <hr />
                      <div className="h-6 w-6/12 bg-gray-300 rounded-lg mb-3"></div>
                      <div className="h-6 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
                      <div className="h-6 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
                    </div>
                  );
                }),
            ]}
          </div>
        )}
        {orders && (
          <>
            {orders.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
                {orders.map((order) => {
                  return (
                    <Link
                      key={order._id}
                      to={`${routes.getOrders}/${order._id}`}
                      className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg hover:bg-gray-100"
                    >
                      <p className="text-sm uppercase font-semibold">
                        ORDER | {order._id}
                      </p>
                      <hr />
                      <h4>Customer: {order.shippingAddress.fullName}</h4>
                      <h4>Price: ₹ {order.totalPrice}/-</h4>
                      <h4>Status: {order.status}</h4>
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default OrdersPage;
