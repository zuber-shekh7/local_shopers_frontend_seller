import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sellerLogin } from "../../actions/sellerActions";
import LoginImage from "../../assets/images/login.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, seller, error } = useSelector((state) => state.sellerLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (seller) {
      navigate("/seller/account");
    }
  }, [seller, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      return;
    }

    dispatch(sellerLogin(email, password));
  };

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto mt-10 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-100 rounded-xl shadow-lg p-10">
            <h2 className="text-4xl font-bold text-center mb-5">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {error && (
                <div className="mb-5 text-center">
                  <p className="text-red-500">{error}</p>
                </div>
              )}
              {loading && (
                <div className="mb-5 text-center">
                  <p>Loading...</p>
                </div>
              )}
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
