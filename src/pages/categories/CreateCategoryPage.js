import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FormData from "form-data";
import routes from "../../utils/routes";
import { createCategory } from "../../actions/categoriesActions";
import Breadcrumb from "../../components/shared/Breadcrumb";

const CreateCategoryPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const { loading, category, error } = useSelector(
    (state) => state.createCategory
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !image) {
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);

    dispatch(createCategory(formData));
  };

  if (category) {
    return <Navigate to={`${routes.getCategories}/${category._id}`} />;
  }

  return (
    <main className="container max-w-xl">
      <section>
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
              name: "new",
              to: "",
            },
          ]}
        />
        <div className="flex justify-center form border-0 shadow-lg">
          <div className="flex-1">
            <div className="bg-indigo-600 py-2">
              <h1 className="text-center text-white">Add category</h1>
            </div>
            <form className="p-5" onSubmit={handleSubmit}>
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
                  required
                />
              </div>
              <div className="mb-3">
                <button
                  className="w-full bg-indigo-600 text-white rounded-lg px-3 py-2 mb-3 hover:bg-indigo-700"
                  type="submit"
                >
                  Create
                </button>
              </div>
              <div className="mb-3">
                {error && <p className="text-center text-red-500">{error}</p>}
                {loading && <p className="text-center">Loading...</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreateCategoryPage;
