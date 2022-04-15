import React from "react";
import OrderListItem from "./OrderListItem";

const OrderList = ({ orders }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {orders.map((order) => {
        return <OrderListItem key={order._id} order={order} />;
      })}
    </div>
  );
};

export default OrderList;
