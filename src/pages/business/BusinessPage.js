import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBusiness } from "../../actions/businessActions";
import routes from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";

const BusinessPage = () => {
  const { businessId } = useParams();

  const { loading, business, error } = useSelector(
    (state) => state.getBusiness
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusiness(businessId));
  }, [businessId, dispatch]);

  return (
    <main className="container">
      <section>
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "your business",
              to: `${routes.getBusiness}/${businessId}`,
            },
          ]}
        />
        <h1>Your Business</h1>
        <hr />
        {business && (
          <div className="w-full mx-auto">
            <div className="flex justify-end mb-5">
              <Link
                to={`${routes.getBusiness}/${business._id}/edit`}
                className="px-3 py-1 text-lg bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
              >
                <span>Edit</span>
              </Link>
            </div>
            <div className="mb-5">
              <img
                className="h-96 w-full object-cover object-center rounded-lg shadow-sm"
                src={business.image}
                alt={business.name}
              />
            </div>
            <div className="text-center">
              <h1>{business.name}</h1>
              <h5 className="font-light">{business.description}</h5>
              <h6>&bull; {business.category.name} &bull;</h6>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2>Categories</h2>
                <Link
                  to={routes.getCategories}
                  className="px-3 py-1 text-lg bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
                >
                  <span>Manage Categories</span>
                </Link>
              </div>
              <hr />
              {business.categories && (
                <>
                  {business.categories.length > 0 ? (
                    <div>
                      {business.categories.map((category) => {
                        return (
                          <Link
                            key={category._id}
                            to={`/business/${business._id}/categories/${category._id}`}
                          >
                            <div
                              className="grid h-64 grid-cols-1 rounded-lg mb-3 overflow-hidden shadow-md hover:opacity-90 hover:text-indigo-700 transition duration-500"
                              style={{
                                backgroundImage: `url(${category.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="flex justify-center items-center">
                                <h3 className="text-indigo-600 px-3 py-2 bg-white  rounded-lg text-2xl sm:text-4xl md:text-6xl font-semibold">
                                  {category.name}
                                </h3>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div>
                      <h4>No Categories available</h4>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default BusinessPage;
