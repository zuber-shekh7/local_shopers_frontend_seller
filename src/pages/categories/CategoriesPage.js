import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategories } from "../../actions/categoriesActions";
import { Card } from "../../components/cards";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { HiOutlinePlus } from "react-icons/hi";
import routes, { generateRoute } from "../../utils/routes";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import { CircleLink } from "../../components/buttons";

const CategoriesPage = () => {
  const { loading, categories, error } = useSelector(
    (state) => state.getCategories
  );

  const { businessId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <main>
      <HeaderContainer>
        <h1>Manage Categories</h1>
      </HeaderContainer>
      <section className="container">
        {/* breadcrumb */}
        <div className="flex justify-between items-center mb-5">
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
                to: "",
              },
            ]}
          />
          <CircleLink
            className="flex justify-center items-center space-x-2 bg-indigo-600 text-white"
            to={generateRoute(routes.createCategory, {
              ":businessId": businessId,
            })}
          >
            <HiOutlinePlus />
          </CircleLink>
        </div>
        {loading && <Loader />}
        {error && <Error />}
        {categories && categories.length && categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {categories.map((category) => {
              return (
                <Link
                  to={`${routes.business}/${businessId}/categories/${category._id}`}
                  key={category._id}
                  className="card border-0"
                >
                  <div
                    className="flex justify-center h-64 w-full rounded-lg hover:opacity-90 hover:text-indigo-700 transition duration-500 shadow-lg"
                    style={{
                      backgroundImage: `url(${category.photo.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex justify-center items-center">
                      <h2 className="text-indigo-600 px-3 py-2 bg-white rounded-lg">
                        {category.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-3">
            <Card className="hover:bg-indigo-50 rounded-lg border overflow-hidden">
              <Link
                className="flex justify-center items-center h-48"
                to={routes.createCategory}
              >
                <h2 className="flex justify-center items-center space-x-5">
                  <HiOutlinePlus /> Add Category
                </h2>
              </Link>
            </Card>
          </div>
        )}
      </section>
    </main>
  );
};

export default CategoriesPage;
