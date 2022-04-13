import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Logo = () => {
  const { user } = useSelector((state) => state.userLogin);

  return (
    <Link
      to={user ? "/users/account" : "/"}
      className="flex items-center space-x-2 text-indigo-600"
    >
      <HiOutlineShoppingCart className="h-8 w-8" />
      <span className="text-2xl font-bold ">Local Shoppers</span>
    </Link>
  );
};

export default Logo;
