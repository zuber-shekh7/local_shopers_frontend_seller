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

  const handleDelete = (productId) => {};
  return (
    <Card className="shadow-lg">
      <Modal
        show={open}
        onClick={() => setOpen(false)}
        onSubmit={() => handleDelete(product._id)}
        title={`Are you sure you want to delete ${product.name}?`}
        description="Once you delete, you won't be able to access it further."
        cta="Confirm Delete"
      />
      <img
        className="object-cover h:64 md:h-96 w-full rounded-lg"
        src={product.photos[0].url}
        alt={product.name}
      />
      <div className="text-center mt-5">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h6>Rs.{product.price}/-</h6>
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
    </Card>
  );
};

export default Product;
