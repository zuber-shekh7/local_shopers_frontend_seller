import React from "react";
import { Link } from "react-router-dom";

const CircleLink = ({ to, children, className, ...rest }) => {
  return (
    <Link
      to={to}
      className={`bg-white text-indigo-600 p-2 rounded-full ${className}`}
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
