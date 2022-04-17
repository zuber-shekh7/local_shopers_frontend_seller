import React from "react";
import { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { useParams } from "react-router-dom";
import routes, { generateRoute } from "../../../utils/routes";
import { Button, LinkButton } from "../../buttons";
import { Card } from "../../cards";
import Modal from "../../shared/Modal";

const Product = ({ product }) => {
  const [open, setOpen] = useState(false);

  const { businessId, categoryId } = useParams();

  const handleDelete = (productId) => {
    //TODO: add delete feature
  };

  return (
    <Card className="shadow-lg border-0">
      <Modal
        show={open}
        onClick={() => setOpen(false)}
        onSubmit={() => handleDelete(product._id)}
        title={`Are you sure you want to delete ${product.name}?`}
        description="Once you delete, you won't be able to access it further."
        cta="Confirm Delete"
      />
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <img
            className="object-cover h:64 md:h-96 w-full rounded-lg"
            src={product.photos[0].url}
            alt={product.name}
          />
        </div>
        <div className="col-span-12 md:col-span-6 md:border-l ml-2">
          <div className="mt-5 md:p-5">
            <div className="text-center">
              <ul>
                <li className="border-b mb-5">
                  <div className="flex justify-between">
                    <p>Name</p>
                    <p>{product.name}</p>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex justify-between">
                    <p>Price</p>
                    <p>{product.price}</p>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex justify-between">
                    <p>Discount Price</p>
                    <p>{product.discountPrice}</p>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex justify-between">
                    <p>Discount</p>
                    <p>{product.discount} %</p>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex justify-between">
                    <p>Unit</p>
                    <p>{product.unit}</p>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex justify-between">
                    <p>Quantity</p>
                    <p>{product.qty}</p>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex justify-between">
                    <p>Stock</p>
                    <p>{product.stock}</p>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex justify-between">
                    <p>Best Seller</p>
                    <p>{product.isBestSeller ? "Yes" : "No"}</p>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex justify-between">
                    <p>Description</p>
                    <p>{product.description}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-evenly space-x-2">
              <LinkButton
                className="flex w-full justify-center items-center space-x-2"
                to={generateRoute(routes.editProduct, {
                  ":businessId": businessId,
                  ":categoryId": categoryId,
                  ":productId": product._id,
                })}
              >
                <HiOutlinePencil />
                <span>Edit</span>
              </LinkButton>
              <Button
                className="bg-red-500 w-full flex justify-center items-center space-x-2 hover:bg-red-600"
                onClick={() => setOpen(true)}
              >
                <HiOutlineTrash />
                <span>Delete</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Product;
