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
import Breadcrumb from "../../components/shared/Breadcrumb";
import moment from "moment";

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
        {/* breadcrumb */}
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "categories",
              to: routes.getCategories,
            },
            {
              name: "Category",
              to: "",
            },
          ]}
        />
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
            <div className="flex-1 flex flex-col card border-0 hover:bg-none">
              <div
                className="h-64 w-full hover:opacity-90 transition duration-500 p-2 mb-3"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex justify-end gap-x-2">
                  <Link
                    className="bg-white rounded-full p-2 shadow-sm text-indigo-600"
                    to={`${routes.getCategories}/${category._id}/edit`}
                  >
                    <span>
                      <HiOutlinePencil className="h-6 w-6" />
                    </span>
                  </Link>
                  <button
                    className="bg-white rounded-full p-2 shadow-sm text-red-500"
                    onClick={() => setOpen(true)}
                  >
                    <span>
                      <HiOutlineTrash className="h-6 w-6" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-3">{category.name}</h2>
                <p className="text-sm">
                  Created : {moment(category.createdAt).fromNow()}
                </p>
                <p className="text-sm">
                  Last Modified : {moment(category.updatedAt).fromNow()}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CategoryPage;
