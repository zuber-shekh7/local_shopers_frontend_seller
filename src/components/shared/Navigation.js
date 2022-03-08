import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { sellerLogout } from "../../actions/sellerActions";

const Navigation = () => {
  const { seller } = useSelector((state) => state.sellerLogin);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(sellerLogout());
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md sticky top-0">
      <section className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* logo and brand name */}
        <div>
          <Link to="/" className="flex items-center space-x-1">
            <HiOutlineShoppingBag className="h-8 w-8" />
            <span className="text-2xl font-bold ">Local Shoppers</span>
            <span className="text-sm">Seller</span>
          </Link>
        </div>
        {/* links */}
        <div className="hidden lg:flex space-x-2 items-center">
          {seller ? (
            <>
              <Link
                to="/seller/account"
                className="py-4 px-2 font-bold text-lg hover:text-indigo-100 transition duration-30"
              >
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="py-2 px-4 bg-white  text-indigo-600 rounded-lg font-bold text-lg hover:text-indigo-00 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="py-4 px-2 font-bold text-lg hover:text-indigo-100 transition duration-30"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="py-4 px-2 font-bold text-lg hover:text-indigo-100 transition duration-30"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="py-2 px-4 bg-white  text-indigo-600 rounded-lg font-bold text-lg hover:text-indigo-00 transition duration-300"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
