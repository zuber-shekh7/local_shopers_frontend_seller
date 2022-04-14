import React from "react";
import { Link } from "react-router-dom";

const CircleLink = ({ to, children, className, ...rest }) => {
  return (
    <Link
      to={to}
      className={`p-2 rounded-full hover:bg-indigo-700 ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

CircleLink.defaultProps = {
  to: "",
};

export default CircleLink;
