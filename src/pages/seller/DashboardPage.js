import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HiOutlineFolderOpen,
  HiOutlineHome,
  HiOutlineTruck,
} from "react-icons/hi";
import { getSeller } from "../../actions/sellerActions";
import routes from "../../utils/routes";

const DashboardPage = () => {
  const {
    seller: { _id },
  } = useSelector((state) => state.sellerLogin);

  const { loading, seller, error } = useSelector((state) => state.getSeller);

  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(getSeller(_id));
    }
  }, [_id, dispatch]);

  return (
    <main className="h-screen">
      <section className="m-10 px-10 max-w-6xl mx-auto">
        {loading && <h1 className="text-center">Loading</h1>}
        {error && <h1 className="text-center">{error}</h1>}
        {seller && !seller.business ? (
          <div className="bg-indigo-500 p-10 rounded-xl shadow-lg text-white">
            <h1 className="text-4xl font-bold mb-3">
              Welcome {seller.firstName}
            </h1>
            <h2 className="text-3xl font-semibold mb-3">
              Start your online business now
            </h2>
            <p className="mb-5">
              Create your online business within 10 minutes
            </p>
            <Link
              className="text-lg font-semibold px-3 py-3 bg-white text-black rounded-lg"
              to={routes.createBusiness}
            >
              Create your online store
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-semibold mb-3">Your Account</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
              <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
                <Link
                  className="flex space-x-2"
                  to={`${routes.getBusiness}/${seller.business._id}`}
                >
                  <div className="hidden md:block">
                    <HiOutlineHome className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium">Manage Business</h4>
                    <h6>Create, Edit, and Delete your categories</h6>
                  </div>
                </Link>
              </div>
              <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
                <Link className="flex space-x-2" to={routes.getCategories}>
                  <div className="hidden md:block">
                    <HiOutlineTruck className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium">Manage Orders</h4>
                    <h6>Create, Edit, and Delete your categories</h6>
                  </div>
                </Link>
              </div>
              <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
                <Link className="flex space-x-2" to={routes.getCategories}>
                  <div className="hidden md:block">
                    <HiOutlineFolderOpen className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium">Manage Categories</h4>
                    <h6>Create, Edit, and Delete your categories</h6>
                  </div>
                </Link>
              </div>
              <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
                <Link className="flex space-x-2" to={routes.getCategories}>
                  <div className="hidden md:block">
                    <HiOutlineFolderOpen className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-medium">Manage Products</h4>
                    <h6>Create, Edit, and Delete your categories</h6>
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default DashboardPage;
