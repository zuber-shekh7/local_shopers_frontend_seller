import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import routes from "../../utils/routes";

const SettingsPage = () => {
  return (
    <div>
      <ul className="card border rounded-lg shadow-lg p-5">
        <li className="border-b mb-5">
          <Link
            to={routes.changePassword}
            className="flex justify-between items-center mb-3"
          >
            <h4 className="font-light">Change Password</h4>
            <span>
              <HiOutlineChevronRight />
            </span>
          </Link>
        </li>
        <li className="">
          <Link
            to={routes.deactivateAccount}
            className="flex justify-between items-center"
          >
            <h4 className="font-light text-red-500">Deactivate Account</h4>
            <span>
              <HiOutlineChevronRight className="text-red-500" />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingsPage;
