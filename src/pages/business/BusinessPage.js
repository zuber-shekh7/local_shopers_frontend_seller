import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowSmLeft, HiOutlinePencil } from "react-icons/hi";
import { getBusiness } from "../../actions/businessActions";
import routes from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";

const BusinessPage = () => {
  const { business_id } = useParams();

  const { loading, business, error } = useSelector(
    (state) => state.getBusiness
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusiness(business_id));
  }, [business_id, dispatch]);

  return (
    <main>
      <section className="m-10 px-10 max-w-xl mx-auto">
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "your business",
              to: business
                ? `${routes.getBusiness}/${business._id}`
                : routes.dashboard,
            },
          ]}
        />
        {business && (
          <div className="flex justify-center">
            <div className="flex-1 bg-gray-50 border-2 border-gray-50 px-10 py-5 rounded-lg shadow-lg">
              <div className="flex justify-between">
                <Link
                  className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                  to={routes.dashboard}
                >
                  <span>
                    <HiOutlineArrowSmLeft className="h-6 w-6" />
                  </span>
                </Link>
                <Link
                  className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                  to={`${routes.getBusiness}/${business._id}/edit`}
                >
                  <span>
                    <HiOutlinePencil className="h-6 w-6" />
                  </span>
                </Link>
              </div>
              <div>
                <img
                  className="h-50 w-50 rounded-lg object-cover mb-3"
                  src={business.image}
                  alt={business.name}
                />
                <div className="text-center mb-3">
                  <h1 className="text-3xl font-semibold mb-3">
                    {business.name}
                  </h1>
                  <p className="text-sm">{business.description}</p>
                </div>
                <div className="px-5">
                  <ul>
                    <li className="flex justify-between border-2 px-5 py-2 rounded-lg mb-3">
                      <h4 className="font-semibold">Category</h4>
                      <p>{business.category.name}</p>
                    </li>
                    <li className="flex justify-between border-2 px-5 py-2 rounded-lg mb-3">
                      <h4 className="font-semibold">Last Modified</h4>
                      <p>{business.updatedAt}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default BusinessPage;
