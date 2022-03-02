import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sellerLogin } from "../../actions/sellerActions";
import routes from "../../utils/routes";

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
    <main className="bg-indigo-400">
      <section className="container mt-0">
        <div className="flex justify-center pt-10 ">
          <div className="w-96 bg-indigo-600 rounded-xl shadow-lg p-5">
            <h2 className="text-center text-white">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full py-2 px-2 rounded-lg focus:ring-1 focus:ring-white "
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seller@example.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password">Password</label>
                <input
                  className="w-full py-2 px-2 rounded-lg focus:ring-1 focus:ring-white "
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
                  className="btn text-base bg-indigo-600 w-full border border-white hover:bg-indigo-700"
                  type="submit"
                >
                  Log In
                </button>
              </div>
              <div className="mb-5">
                <p className="text-center text-white">
                  Don't have an account?{" "}
                  <Link className="underline" to={routes.signup}>
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
