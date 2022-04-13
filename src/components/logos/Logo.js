import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";

const Logo = () => {
  const { seller } = useSelector((state) => state.sellerLogin);

  return (
    <Link
      to={seller ? routes.dashboard : routes.home}
      className="flex items-center space-x-2 text-indigo-600"
    >
      <HiOutlineShoppingCart className="h-8 w-8" />
      <span className="text-2xl font-bold ">Local Shoppers</span>
    </Link>
  );
};

export default Logo;
