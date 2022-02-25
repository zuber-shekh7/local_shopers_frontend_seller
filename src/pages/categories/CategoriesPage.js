import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/categoriesActions";
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
    <main>
      <section className="m-10 px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-4xl font-bold mb-4">Manage Categories</h1>
            <Link
              className="bg-indigo-500 text-white rounded-lg px-3 py-2"
              to={routes.dashboard}
            >
              Add category
            </Link>
          </div>
        </div>
        <div>
          {categories && categories.length && categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {categories.map((category) => {
                return (
                  <Link
                    to={`${routes.getCategories}/${category._id}`}
                    key={category._id}
                    className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg hover:bg-gray-100"
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
