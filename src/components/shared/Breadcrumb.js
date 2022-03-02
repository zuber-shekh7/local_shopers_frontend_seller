import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

const Breadcrumb = ({ links }) => {
  return (
    <div className="flex mb-3">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            className={`text-xs sm:text-sm flex justify-center items-center space-x-1 ${
              links.length - 1 === index ? "text-indigo-500" : ""
            }`}
            to={link.to}
          >
            <span className="font-bold capitalize">{link.name}</span>
            <span>{links.length - 1 !== index ? <HiChevronRight /> : " "}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
