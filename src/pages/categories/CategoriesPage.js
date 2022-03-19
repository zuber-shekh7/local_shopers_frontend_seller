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
                    className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-md hover:bg-gray-100"
                  >
                    <div className="flex items-center space-x-2">
                      <img
                        className="block h-10 w-10 rounded-full"
                        src={category.image}
                        alt={category.image}
                      />

                      <h2 className="text-2xl font-semibold">
                        {category.name}
                      </h2>
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
