import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <section>
        <div className="grid-span-1 p-20 space-y-4 mx-auto text-center">
          <h1 className="text-indigo-500 text-5xl md:text-7xl lg:text-9xl font-extrabold">
            Local Shoppers
          </h1>
          <h4 className="text-xl md:text-3xl lg:text-5xl text-gray-600 mt-10">
            Online Store For Locals, By Locals
          </h4>
          <div>
            <Link
              to="/"
              className="inline-block py-3 px-4 text-xl hover:bg-indigo-400 bg-indigo-500 rounded-lg text-white shadow-lg mt-5"
            >
              Start selling online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
