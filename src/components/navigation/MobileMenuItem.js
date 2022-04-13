import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenuItem = ({ to, children, ...rest }) => {
  return (
    <NavLink
      className={(isActive) =>
        "flex items-center space-x-2 rounded py-2 px-3 text-lg hover:text-indigo-600 transition duration-300" +
        (isActive.isActive ? " text-indigo-600" : "")
      }
      to={to}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

MobileMenuItem.defaultProps = {
  to: "",
};
export default MobileMenuItem;
