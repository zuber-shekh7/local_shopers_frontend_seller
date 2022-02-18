import React from "react";
import LoginImage from "../../assets/images/login.svg";

const LoginPage = () => {
  return (
    <main>
      <section className="max-w-7xl mx-auto mt-10 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-100 rounded-xl shadow-lg p-10">
            <h2 className="text-4xl font-bold text-center mb-5">Login</h2>
            <form>
              <div className="mb-5">
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  type="email"
                  id="email"
                  placeholder="seller@example.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block" htmlFor="password">
                  Password
                </label>
                <input
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  type="password"
                  id="password"
                  placeholder="seller@example.com"
                  required
                />
              </div>
              <div className="mb-5">
                <button
                  className="w-full py-2 text-lg bg-indigo-500 rounded-lg text-white"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <img className="h-72 w-auto" src={LoginImage} alt="login" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
