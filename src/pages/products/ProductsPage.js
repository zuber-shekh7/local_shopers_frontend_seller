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
import routes from "../../utils/routes";

const ProductsPage = () => {
  const { categoryId } = useParams();

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
                to: "",
              },
            ]}
          />
          <CircleLink
            className="flex justify-center items-center space-x-2 bg-indigo-600 text-white"
            to={`${routes.getCategories}/${categoryId}/products/add`}
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
