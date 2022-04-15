import React from "react";
import routes from "../../utils/routes";
import {
  HiOutlineUserCircle,
  HiArrowRight,
  HiOutlineHome,
  HiOutlineLogin,
  HiOutlineLogout,
} from "react-icons/hi";
import { Button, LinkButton } from "../buttons";
import MenuItem from "./MenuItem";

const DesktopMenu = ({ user, handleUserLogout, noCartItems }) => {
  return (
    <div className="hidden sm:flex space-x-3 items-center">
      {user ? (
        <>
          <MenuItem to={routes.dashboard}>
            <HiOutlineHome className="h-6 w-6" />
            <span>Home</span>
          </MenuItem>
          <MenuItem to={routes.account}>
            <HiOutlineUserCircle className="h-6 w-6" />
            <span>Account</span>
          </MenuItem>
          <Button
            className="flex justify-center items-center space-x-2 text-lg"
            onClick={handleUserLogout}
          >
            <HiOutlineLogout className="h-6 w-6" />
            <span>Logout</span>
          </Button>
        </>
      ) : (
        <>
          <MenuItem to={routes.home}>
            <HiOutlineHome className="h-6 w-6" />
            <span>Home</span>
          </MenuItem>
          <MenuItem to={routes.login}>
            <HiOutlineLogin className="h-6 w-6" />
            <span>Login</span>
          </MenuItem>
          <LinkButton
            className="flex justify-center items-center space-x-2 text-lg"
            to={routes.signup}
          >
            <span>Signup</span>
            <HiArrowRight className="h-6 w-6" />
          </LinkButton>
        </>
      )}
    </div>
  );
};

export default DesktopMenu;
