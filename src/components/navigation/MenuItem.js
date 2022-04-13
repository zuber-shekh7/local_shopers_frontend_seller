import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ to, children, ...rest }) => {
  return (
    <NavLink
      className={(isActive) =>
        "flex items-center space-x-1 py-4 px-2 text-lg hover:text-indigo-600 transition duration-300" +
        (isActive.isActive ? " text-indigo-600" : "")
      }
      to={to}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

MenuItem.defaultProps = {
  to: "",
};
export default MenuItem;
