import React from "react";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

const Breadcrumb = ({ links }) => {
  return (
    <div className="flex mb-5">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            className={`text-xs flex justify-center items-center hover:text-indigo-700 ${
              links.length - 1 === index ? "text-indigo-600" : ""
            }`}
            to={link.to}
          >
            <span className="font-bold uppercase">{link.name}</span>
            <span>{links.length - 1 !== index ? <HiChevronRight /> : ""}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
