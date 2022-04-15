import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/productActions";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import { Product } from "../../components/pages/products";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import routes, { generateRoute } from "../../utils/routes";

const ProductPage = () => {
  const { businessId, categoryId, productId } = useParams();

  const { loading, product, error } = useSelector((state) => state.getProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId, dispatch]);

  return (
    <main>
      <HeaderContainer>
        <h1>{product ? product.name : "Product"}</h1>
      </HeaderContainer>
      <section className="container max-w-lg">
        {/* breadcrumb */}
        <Breadcrumb
          links={[
            {
              name: "home",
              to: generateRoute(routes.getBusiness, {
                ":businessId": businessId,
              }),
            },
            {
              name: "categories",
              to: generateRoute(routes.getCategories, {
                ":businessId": businessId,
              }),
            },
            {
              name: "category",
              to: generateRoute(routes.getCategory, {
                ":businessId": businessId,
                ":categoryId": categoryId,
              }),
            },
            {
              name: "products",
              to: generateRoute(routes.getProducts, {
                ":businessId": businessId,
                ":categoryId": categoryId,
              }),
            },
            { name: product ? product.name : "product", to: "" },
          ]}
        />
        {loading && <Loader />}
        {error && <Error />}
        {product && <Product product={product} />}
      </section>
    </main>
  );
};

export default ProductPage;
