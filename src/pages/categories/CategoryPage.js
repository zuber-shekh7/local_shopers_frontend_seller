import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  HiOutlinePencil,
  HiOutlineArrowSmLeft,
  HiOutlineTrash,
} from "react-icons/hi";
import { deleteCategory, getCategory } from "../../actions/categoriesActions";
import routes from "../../utils/routes";
import Modal from "../../components/shared/Modal";

const CategoryPage = () => {
  const [open, setOpen] = useState(false);

  const { loading, category, error } = useSelector(
    (state) => state.getCategory
  );

  const { deleteLoading, success, deleteError } = useSelector(
    (state) => state.deleteCategory
  );

  const dispatch = useDispatch();
  const { category_id } = useParams();

  useEffect(() => {
    dispatch(getCategory(category_id));
  }, [dispatch, category_id]);

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
    setOpen(false);
  };

  if (success) {
    return <Navigate to={routes.getCategories} />;
  }

  return (
    <main>
      <section className="m-10 px-10 max-w-xl mx-auto min-h-screen">
        {category && (
          <div className="flex justify-center">
            <Modal
              show={open}
              onClick={() => setOpen(false)}
              onSubmit={() => handleDelete(category._id)}
              title={`Are you sure you want to delete ${category.name}?`}
              description="Once you delete, you won't be able to access it further."
              cta="Confirm Delete"
            />
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
                  <div className="flex space-x-2 items-center">
                    <Link
                      className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                      to={`${routes.getCategories}/${category._id}/edit`}
                    >
                      <span>
                        <HiOutlinePencil className="h-6 w-6" />
                      </span>
                    </Link>
                    <button
                      className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                      onClick={() => setOpen(true)}
                    >
                      <span>
                        <HiOutlineTrash className="h-6 w-6" />
                      </span>
                    </button>
                  </div>
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
