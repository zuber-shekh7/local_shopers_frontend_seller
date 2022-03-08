import React from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "../../assets/images/not-found.svg";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="container flex flex-col items-center mt-10 h-screen">
      <img className="w-64 sm:w-80 mb-5" src={NotFound} alt="Page not found" />
      <h1 className="text-xl sm:text-2xl lg:text-4xl mt-5">
        Looks like you are lost, <br className="block sm:hidden" />
        let me help to go home
      </h1>
      <div className="mt-5">
        <button
          className="py-3 px-3 bg-indigo-600 text-white rounded-lg text-bold text-lg hover:bg-indigo-700 transition duration-300"
          onClick={() => navigate(-1)}
        >
          Way to Home
        </button>
      </div>
    </main>
  );
};

export default NotFoundPage;
