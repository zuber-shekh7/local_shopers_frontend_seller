import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import routes from "../../utils/routes";
import { getSeller } from "../../actions/sellerActions";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const {
    seller: { _id },
  } = useSelector((state) => state.sellerLogin);
  const { loading, seller, error } = useSelector((state) => state.getSeller);

  useEffect(() => {
    dispatch(getSeller(_id));
  }, [_id, dispatch]);

  return (
    <div>
      <div>
        {seller && (
          <div className="flex justify-center">
            <div className="flex-1 border p-5 rounded-lg shadow-lg">
              <ul>
                <li className="border-b mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-5">
                      <h4 className="font-light">First Name</h4>
                      <h4 className="font-normal">
                        {seller.profile.firstName}
                      </h4>
                    </div>
                    <div>
                      <Link to={routes.editProfile}>
                        <HiOutlinePencil className="text-indigo-600 hover:bg-none" />
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-5">
                      <h4 className="font-light">Last Name</h4>
                      <h4 className="font-normal">{seller.profile.lastName}</h4>
                    </div>
                    <div>
                      <Link to={routes.editProfile}>
                        <HiOutlinePencil className="text-indigo-600 hover:bg-none" />
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="border-b mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-5">
                      <h4 className="font-light">Email</h4>
                      <h4 className="font-normal lowercase">{seller.email}</h4>
                    </div>
                    <div>
                      <Link to={routes.editProfile}>
                        <HiOutlinePencil className="text-indigo-600 hover:bg-none" />
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-5">
                      <h4 className="font-light">Mobile</h4>
                      <h4 className="font-normal">{seller.mobile}</h4>
                    </div>
                    <div>
                      <Link to={routes.editProfile}>
                        <HiOutlinePencil className="text-indigo-600 hover:bg-none" />
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {error && <h5 className="text-center text-red-500">{error}</h5>}
      {loading && (
        <div className="flex justify-center">
          <div className="animate-pulse flex-1 bg-gray-50 border  px-10 py-5 rounded-lg shadow-lg ">
            <div className="flex justify-end">
              <div className="h-12 w-12 bg-gray-300 rounded-full mb-5"></div>
            </div>
            <div>
              {[...Array(5).fill(1)].map((value, index) => {
                return (
                  <div key={index} className="flex justify-between mb-5">
                    <div className="h-8 w-3/12 bg-gray-300 rounded-lg"></div>
                    <div className="h-8 w-4/12 bg-gray-300 rounded-lg"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
