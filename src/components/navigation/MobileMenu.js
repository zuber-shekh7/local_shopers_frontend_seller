import React from "react";
import routes from "../../utils/routes";
import {
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
  HiOutlineLogout,
  HiOutlineHome,
  HiOutlineLogin,
} from "react-icons/hi";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = ({ user, handleUserLogout, noCartItems }) => {
  return (
    <div className="sm:hidden min-h-screen">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {user ? (
          <>
            <MobileMenuItem to={routes.dashboard}>
              <HiOutlineHome className="h-6 w-6" />
              <span>Home</span>
            </MobileMenuItem>
            <MobileMenuItem to={routes.profile}>
              <HiOutlineUserCircle className="h-6 w-6" />
              <span>Account</span>
            </MobileMenuItem>
            <MobileMenuItem to={routes.cart}>
              <HiOutlineShoppingCart className="h-6 w-6" />
              <span>Cart</span>
              {noCartItems > 0 && (
                <span>
                  <sup className="text-xs px-1 bg-indigo-600 text-white rounded-full">
                    {noCartItems}
                  </sup>
                </span>
              )}
            </MobileMenuItem>
            <button
              className="flex items-center space-x-2 rounded py-2 px-3 text-lg hover:text-indigo-600 transition duration-300"
              onClick={handleUserLogout}
            >
              <HiOutlineLogout className="h-6 w-6" />
              <span>Log Out</span>
            </button>
          </>
        ) : (
          <>
            <MobileMenuItem to={routes.home}>
              <HiOutlineHome className="h-6 w-6" />
              <span>Home</span>
            </MobileMenuItem>
            <MobileMenuItem to={routes.login}>
              <HiOutlineLogin className="h-6 w-6" />
              <span>Login</span>
            </MobileMenuItem>
            <MobileMenuItem to={routes.signup}>
              <HiOutlineUserCircle className="h-6 w-6" />
              <span>Signup</span>
            </MobileMenuItem>
            <MobileMenuItem to={routes.cart}>
              <HiOutlineShoppingCart className="h-6 w-6" />
              <span>Cart</span>
              {noCartItems > 0 && (
                <span>
                  <sup className="text-xs px-1 bg-indigo-600 text-white rounded-full">
                    {noCartItems}
                  </sup>
                </span>
              )}
            </MobileMenuItem>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
