import React from "react";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <section className="bg-indigo-500 grid grid-cols-1 md:grid-cols-3 gap-x-5 md:justify-items-center pb-5 md:pb-0">
        <div className="px-5 pt-5 md:p-10">
          <h3 className="flex items-center text-white">
            <HiOutlineShoppingBag className="text-white h-6 w-6 md:h-8 md:w-8" />
            <span>Local Shoppers</span>
          </h3>
          <p className="text-sm sm:text-lg text-white">
            Online Store for Locals, By Locals
          </p>
        </div>
        <div className="px-5 pt-5 md:p-10">
          <h3 className="text-white">Company</h3>

          <div className="text-white">
            <Link className="block" to={routes.about}>
              About Us
            </Link>
            <Link className="block" to={routes.privacy}>
              Privacy Policy
            </Link>
            <Link className="block" to={routes.terms}>
              Terms of Service
            </Link>
            <Link className="block" to={routes.contact}>
              Contact Us
            </Link>
            <Link className="block" to={routes.faqs}>
              FAQs
            </Link>
          </div>
        </div>
        <div className="px-5 pt-5 md:p-10">
          <h3 className="text-white">Follows Us</h3>

          <div className="flex text-white space-x-2">
            <Link className="inline-block" to={routes.home}>
              <FiFacebook className="h-8 w-8" />
            </Link>
            <Link className="inline-block" to={routes.about}>
              <FiInstagram className="h-8 w-8" />
            </Link>
            <Link className="inline-block" to={routes.about}>
              <FiYoutube className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-indigo-700">
        <div className="flex justify-center items-center py-3 sm:p-5">
          <p className="text-white font-semibold">
            &copy; 2022 Local Shoppers.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
