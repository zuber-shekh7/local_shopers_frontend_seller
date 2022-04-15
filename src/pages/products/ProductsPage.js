import React from "react";
import { useEffect } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../actions/productActions";
import { CircleLink } from "../../components/buttons";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import { ProductList } from "../../components/pages/products";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import routes, { generateRoute } from "../../utils/routes";

const ProductsPage = () => {
  const { businessId, categoryId } = useParams();

  const { loading, products, error } = useSelector(
    (state) => state.getProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(categoryId));
  }, [categoryId, dispatch]);

  return (
    <main>
      <HeaderContainer>
        <h1>Products</h1>
      </HeaderContainer>
      <section className="container">
        <div className="flex justify-between items-center mb-5">
          {/* breadcrumb */}
          <Breadcrumb
            className="mb-0"
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
              { name: "products", to: "" },
            ]}
          />
          <CircleLink
            className="flex justify-center items-center space-x-2 bg-indigo-600 text-white"
            to={generateRoute(routes.createProduct, {
              ":businessId": businessId,
              ":categoryId": categoryId,
            })}
          >
            <HiOutlinePlus />
          </CircleLink>
        </div>
        {loading && <Loader />}
        {error && <Error />}

        {products && <ProductList products={products} />}
      </section>
    </main>
  );
};

export default ProductsPage;
