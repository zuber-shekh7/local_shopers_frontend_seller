import React from "react";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";

const HomePage = () => {
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
