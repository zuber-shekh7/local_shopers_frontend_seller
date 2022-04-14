import React from "react";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="flex justify-center">
        <h1>No products available</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-12 space-x-5">
        {products.map((product) => {
          return (
            <div className="col-span-12 md:col-span-4 mb-5" key={product._id}>
              <ProductListItem product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
