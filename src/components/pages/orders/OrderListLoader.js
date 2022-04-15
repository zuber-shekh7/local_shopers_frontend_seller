import React from "react";

const OrderListLoader = () => {
  return (
    <div className="grid grid-cols-1 gap-y-5">
      {[...Array(6).fill(1, 6)].map((value, index) => {
        return (
          <div
            key={index + 1}
            className="card border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="animate-pulse flex flex-col">
              <div className="h-24 bg-gray-300"></div>
              <div className="h-32"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderListLoader;
