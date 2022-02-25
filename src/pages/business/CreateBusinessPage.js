import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import FormData from "form-data";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import routes from "../../utils/routes";
import { getBusinessCategories } from "../../actions/businessCategoryActions";
import { createBusiness } from "../../actions/businessActions";
import { getSeller } from "../../actions/sellerActions";

const CreateBusinessPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const {
    seller: { _id },
  } = useSelector((state) => state.sellerLogin);
  const { seller } = useSelector((state) => state.getSeller);

  const { categories: businessCategories } = useSelector(
    (state) => state.getBusinessCategories
  );
  const { loading, business, error } = useSelector(
    (state) => state.createBusiness
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSeller(_id));
  }, [_id, dispatch]);

  useEffect(() => {
    if (seller && seller.business) {
      navigate(routes.dashboard);
    }
  }, [seller, navigate, dispatch]);

  useEffect(() => {
    if (!businessCategories) {
      dispatch(getBusinessCategories());
    } else {
      setCategories(businessCategories);
      setCategory(businessCategories[0]._id);
    }
  }, [businessCategories, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("business_category_id", category);

    dispatch(createBusiness(formData));
  };

  if (business) {
    return <Navigate to={routes.dashboard} />;
  }

  return (
    <main>
      <section className="m-10 px-10 max-w-xl mx-auto">
        <div className="flex justify-center bg-gray-50 border-2 border-gray-50 py-5 rounded-lg shadow-lg px-10">
          <div>
            <div className="flex justify-start">
              <Link
                className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                to={routes.dashboard}
              >
                <span>
                  <HiOutlineArrowSmLeft className="h-6 w-6" />
                </span>
              </Link>
            </div>
            <h1 className="text-center text-4xl font-semibold mb-4">
              Create business
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
                  placeholder="My Online Store"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray  resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="The Best online store ever"
                  required
                ></textarea>
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
                <label>Category</label>
                <select
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option disabled>Select Business Category</option>
                  {categories &&
                    categories.length > 0 &&
                    categories.map((category) => {
                      return (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div className="mb-3">
                <button
                  className="w-full bg-indigo-500 text-white rounded-lg px-3 py-2 mb-3"
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

export default CreateBusinessPage;
