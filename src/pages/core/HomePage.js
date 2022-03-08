import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../utils/routes";

const HomePage = () => {
  const { seller } = useSelector((state) => state.sellerLogin);

  const navigate = useNavigate();

  useEffect(() => {
    if (seller) {
      return navigate(routes.dashboard);
    }
  }, [seller, navigate]);

  return (
    <main>
      <section className="container">
        <div className="grid grid-cols-12 gap-3">
          <div className="flex justify-start items-center col-span-12 md:col-span-6">
            <div>
              <h1 hidden className="display-1 text-white text-center">
                Local Shoppers
              </h1>
              <h2 className="text-5xl mb-5">Start selling online.</h2>
              <h4 className="text-xl font-thin mb-5">
                Create and grow your online business with local shoppers.
              </h4>
              <div className="mt-10">
                <Link
                  to={routes.signup}
                  className="btn font-semibold text-2xl bg-indigo-600 text-white py-4 px-5 hover:bg-indigo-500"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center">
              <img
                className="rounded-md shadow mt-10"
                src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="Grow your business with local shoppers"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
