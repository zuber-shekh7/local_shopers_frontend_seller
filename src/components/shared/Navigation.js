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
    <nav className="bg-white shadow-lg">
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
                className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
              >
                Home
              </Link>
              <button
                onClick={handleLogout}
                className="py-2 px-4  bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="py-2 px-4  bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="py-2 px-4  bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
