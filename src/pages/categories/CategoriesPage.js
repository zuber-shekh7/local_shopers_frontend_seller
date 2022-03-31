import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/categoriesActions";
import Breadcrumb from "../../components/shared/Breadcrumb";
import routes from "../../utils/routes";

const CategoriesPage = () => {
  const { loading, categories, error } = useSelector(
    (state) => state.getCategories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <main className="container">
      <section>
        {/* breadcrumb */}
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "manage categories",
              to: routes.getCategories,
            },
          ]}
        />
        <div>
          <div className="flex justify-between items-center mb-3">
            <h1>Manage Categories</h1>
            <Link
              className="bg-indigo-600 text-white text-lg rounded-lg px-3 py-2 hover:bg-indigo-700"
              to={routes.createCategory}
            >
              Add category
            </Link>
          </div>
        </div>
        <hr />
        <div>
          {categories && categories.length && categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {categories.map((category) => {
                return (
                  <Link
                    to={`${routes.getCategories}/${category._id}`}
                    key={category._id}
                    className="card border-0"
                  >
                    <div
                      className="flex justify-center h-64 w-full rounded-lg hover:opacity-90 hover:text-indigo-700 transition duration-500"
                      style={{
                        backgroundImage: `url(${category.image})`,
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
            <div className="flex justify-center">
              <h3 className="text-2xl text-center">No categories available</h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CategoriesPage;
