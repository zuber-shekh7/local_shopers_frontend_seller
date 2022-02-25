import React, { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import FormData from "form-data";
import routes from "../../utils/routes";
import { editCategory, getCategory } from "../../actions/categoriesActions";
import { useEffect } from "react";

const EditCategoryPage = () => {
  const [name, setName] = useState("");

  const [image, setImage] = useState(null);

  const { loading, category, error } = useSelector(
    (state) => state.getCategory
  );
  const {
    loading: updateLoading,
    category: updatedCategory,
    updateError,
  } = useSelector((state) => state.editCategory);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category_id } = useParams();

  useEffect(() => {
    dispatch(getCategory(category_id));
  }, [category_id, dispatch]);

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !image) {
      return;
    }

    if (name === category.name && !image) {
      return navigate(`${routes.getCategories}/${category_id}`);
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);

    dispatch(editCategory(formData, category_id));
  };

  if (updatedCategory) {
    return <Navigate to={`${routes.getCategories}/${category._id}`} />;
  }

  return (
    <main>
      <section className="m-10 px-10 max-w-xl mx-auto">
        <div className="flex justify-center bg-gray-50 border-2 border-gray-50 py-5 rounded-lg shadow-lg px-10">
          <div>
            <div className="flex justify-start">
              <Link
                className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                to={routes.getCategories}
              >
                <span>
                  <HiOutlineArrowSmLeft className="h-6 w-6" />
                </span>
              </Link>
            </div>
            <h1 className="text-center text-4xl font-semibold mb-4">
              Edit category
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="iPhones"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="image">Image</label>
                <input
                  id="image"
                  className="w-full file:text-sm file:border-0 file:px-4 file:py-2 file:mt-3 file:rounded-full file:text-indigo-500 file:bg-violet-50 file:font-semibold hover:file:bg-violet-100"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  placeholder="Upload image"
                  accept="image/jpeg"
                />
              </div>
              <div className="mb-3">
                <button
                  className="w-full bg-indigo-500 text-white rounded-lg px-3 py-2 mb-3"
                  type="submit"
                >
                  Save
                </button>
              </div>
              <div className="mb-3">
                {(updateError || error) && (
                  <p className="text-center text-red-500">
                    {error || updateError}
                  </p>
                )}
                {(updateLoading || loading) && (
                  <p className="text-center">Loading...</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditCategoryPage;
