import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { HiPencil } from "react-icons/hi";
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
      <section className="container">
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
        <h1>Your Business</h1>
        <hr />
        {business && (
          <div className="w-full sm:w-8/12 md:w-4/12 lg: flex justify-center mx-auto">
            <div className="flex-1 bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-lg">
              <div className="flex justify-end">
                <Link
                  className="inline-block p-2 border-2 border-white bg-transparent rounded-full text-white mb-5"
                  to={`${routes.getBusiness}/${business._id}/edit`}
                >
                  <span>
                    <HiPencil className="h-6 w-6" />
                  </span>
                </Link>
              </div>
              <div>
                <img
                  className="h-64 w-full obj rounded-lg mb-5"
                  src={business.image}
                  alt={business.name}
                />
                <div className="text-center mb-5">
                  <h1>{business.name}</h1>
                  <p>{business.description}</p>
                </div>
                <div>
                  <ul>
                    <li className="flex justify-between items-center border-2 px-5 py-2 rounded-lg mb-3">
                      <h4 className="font-semibold">Category</h4>
                      <p>{business.category.name}</p>
                    </li>
                    <li className="flex justify-between items-center border-2 px-5 py-2 rounded-lg mb-3">
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
