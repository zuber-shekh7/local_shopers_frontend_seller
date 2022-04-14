import React from "react";
import { useParams } from "react-router-dom";
import routes from "../../../utils/routes";
import { LinkButton } from "../../buttons";
import { Card } from "../../cards";

const ProductListItem = ({ product }) => {
  const { categoryId } = useParams();

  return (
    <Card className="border shadow-lg">
      <img
        className="object-cover rounded-lg mb-5"
        src={product.photos[0].url}
        alt={product.name}
      />
      <div className="text-center">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <LinkButton
          to={`${routes.getCategories}/${categoryId}/products/${product._id}`}
        >
          View More
        </LinkButton>
      </div>
    </Card>
  );
};

export default ProductListItem;
