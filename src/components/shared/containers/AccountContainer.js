import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineUser, HiOutlineCog } from "react-icons/hi";
import routes from "../../../utils/routes";
import Breadcrumb from "../Breadcrumb";

const AccountContainer = () => {
  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>Your Account</h1>
        </div>
      </section>
      <section className="container">
        <Breadcrumb
          links={[
            {
              name: "home",
              to: routes.dashboard,
            },
            {
              name: "account",
              to: routes.profile,
            },
          ]}
        />

        <div className="grid grid-cols-12">
          <div className="col-span-4 border-r">
            <div className="mr-5">
              <NavLink
                className={(isActive) =>
                  "flex justify-start items-center space-x-2 text-indigo-600 p-4 rounded-lg text-lg hover:bg-indigo-50" +
                  (isActive.isActive ? " bg-indigo-100" : "")
                }
                to={routes.profile}
              >
                <span>
                  <HiOutlineUser className="h-6 w-6" />
                </span>
                <span>Profile</span>
              </NavLink>
              <NavLink
                className={(isActive) =>
                  "flex justify-start items-center space-x-2 text-indigo-600 p-4 rounded-lg text-lg hover:bg-indigo-50" +
                  (isActive.isActive ? " bg-indigo-100" : "")
                }
                to={routes.settings}
              >
                <span>
                  <HiOutlineCog className="h-6 w-6" />
                </span>
                <span>Settings</span>
              </NavLink>
            </div>
          </div>
          <div className="col-span-8 ml-5">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountContainer;
