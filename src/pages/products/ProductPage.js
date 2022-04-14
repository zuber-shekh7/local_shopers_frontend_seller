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
import routes from "../../utils/routes";

const ProductPage = () => {
  const { categoryId, productId } = useParams();

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
              to: routes.dashboard,
            },
            {
              name: "categories",
              to: routes.getCategories,
            },
            {
              name: "category",
              to: `${routes.getCategories}/${categoryId}`,
            },
            {
              name: "products",
              to: `${routes.getCategories}/${categoryId}/products`,
            },
            {
              name: product ? product.name : "Product",
              to: "",
            },
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
