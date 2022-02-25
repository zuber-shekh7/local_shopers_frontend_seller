import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { HiOutlinePencil, HiOutlineArrowSmLeft } from "react-icons/hi";
import { getCategory } from "../../actions/categoriesActions";
import routes from "../../utils/routes";

const CategoryPage = () => {
  const { loading, category, error } = useSelector(
    (state) => state.getCategory
  );
  const dispatch = useDispatch();
  const { category_id } = useParams();

  useEffect(() => {
    dispatch(getCategory(category_id));
  }, [dispatch, category_id]);

  return (
    <main>
      <section className="m-10 px-10 max-w-xl mx-auto">
        {category && (
          <div className="flex justify-center">
            <div className="flex-1 bg-gray-50 border-2 border-gray-50 px-10 py-5 rounded-lg shadow-lg">
              <div>
                <div className="flex justify-between">
                  <Link
                    className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                    to={routes.getCategories}
                  >
                    <span>
                      <HiOutlineArrowSmLeft className="h-6 w-6" />
                    </span>
                  </Link>
                  <Link
                    className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                    to={`${routes.getCategories}/${category._id}/edit`}
                  >
                    <span>
                      <HiOutlinePencil className="h-6 w-6" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <img
                  className="rounded-lg object-cover mb-3"
                  src={category.image}
                  alt={category.name}
                />
                <h2 className="text-2xl font-semibold mb-3">{category.name}</h2>
                <p className="text-sm">Last Modified : {category.updatedAt}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CategoryPage;
