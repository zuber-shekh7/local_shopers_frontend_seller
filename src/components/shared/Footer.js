import React from "react";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-indigo-500">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-x-5 md:justify-items-center">
        <div className="p-10">
          <h2 className="text-white text-4xl font-bold mb-2">Local Shoppers</h2>
          <p className="text-lg text-white">
            Online Store for Locals, By Locals
          </p>
        </div>
        <div className="p-10">
          <h4 className="text-2xl text-white font-semibold mb-3">
            Local Shoppers
          </h4>

          <div className="text-white">
            <Link className="block" to={routes.home}>
              Home
            </Link>
            <Link className="block" to={routes.about}>
              About Us
            </Link>
            <Link className="block" to={routes.home}>
              Privacy Policy
            </Link>
            <Link className="block" to={routes.home}>
              Terms of Service
            </Link>
            <Link className="block" to={routes.home}>
              Contact Us
            </Link>
            <Link className="block" to={routes.home}>
              FAQs
            </Link>
          </div>
        </div>
        <div className="p-10">
          <h4 className="text-2xl text-white font-semibold mb-3">Follows Us</h4>

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
    </footer>
  );
};

export default Footer;
