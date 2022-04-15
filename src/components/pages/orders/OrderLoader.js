import React from "react";

const OrderLoader = () => {
  return (
    <div className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg hover:bg-gray-100">
      <div className="animate-pulse grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 sm:px-2">
          <div className="h-4 sm:h-12 bg-gray-300 rounded-lg mb-3"></div>
          <hr />
          <div className="h-8 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
          <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
          <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
          <hr />
          <div className="h-8 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
          <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
        </div>
        <div className="col-span-12 md:col-span-6 border-l sm:px-2">
          <div className="h-8 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
          <hr />
          <div className="flex justify-between mb-3">
            <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
            <div className="h-4 w-1/12 bg-gray-300 rounded-lg mb-3"></div>
          </div>
          <div>
            {[...Array(3).fill(1)].map((orderItem, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-12 items-center mb-3 gap-x-2"
                >
                  <div
                    className="col-span-2 bg-gray-300 h-12 rounded-lg"
                    src={orderItem.image}
                    alt={orderItem.name}
                  ></div>
                  <div className="col-span-10 flex justify-between">
                    <div className="h-6 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
                    <div className="h-6 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="mb-3" />
          <div className="flex justify-between mb-3">
            <div className="h-4 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
            <div className="h-4 w-1/12 bg-gray-300 rounded-lg mb-3"></div>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="h-8 w-2/12 bg-gray-300 rounded-lg mb-3"></div>
              <div className="h-8 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderLoader;
