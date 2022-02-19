import React from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "../../assets/images/not-found.svg";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center mt-10 h-screen">
      <h1 className="text-2xl lg:text-4xl mb-5">
        Look like you are lost, let me help to go home
      </h1>
      <img className="w-80 mb-5" src={NotFound} alt="Page not found" />
      <div className="mt-5">
        <button
          className="py-3 px-3 bg-indigo-500 text-white rounded-lg text-bold text-lg hover:text-indigo-400 transition duration-300"
          onClick={() => navigate(-1)}
        >
          Way to Home
        </button>
      </div>
    </main>
  );
};

export default NotFoundPage;
