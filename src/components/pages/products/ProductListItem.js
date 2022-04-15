import React from "react";
import { useParams } from "react-router-dom";
import routes, { generateRoute } from "../../../utils/routes";
import { LinkButton } from "../../buttons";
import { Card } from "../../cards";

const ProductListItem = ({ product }) => {
  const { businessId, categoryId } = useParams();

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
          to={generateRoute(routes.getProduct, {
            ":businessId": businessId,
            ":categoryId": categoryId,
            ":productId": product._id,
          })}
        >
          View More
        </LinkButton>
      </div>
    </Card>
  );
};

export default ProductListItem;
