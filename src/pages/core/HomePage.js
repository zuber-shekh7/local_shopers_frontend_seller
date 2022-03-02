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
        <div className="flex justify-center">
          <div>
            <h1 className="display-1 text-brand text-center">Local Shoppers</h1>
            <h4 className="text-gray-500 text-xs text-center">
              Online Store For Locals, By Locals
            </h4>
            <div className="text-center mt-5">
              <Link to={routes.signup} className="btn">
                Sell Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
