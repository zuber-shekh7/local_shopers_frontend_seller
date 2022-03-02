import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sellerSignup } from "../../actions/sellerActions";
import routes from "../../utils/routes";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

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

    if (!email && !password && !firstName && !lastName && !mobile) {
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Password must match.");
      return;
    }

    dispatch(sellerSignup(email, password, firstName, lastName, mobile));
  };

  return (
    <main className="bg-indigo-400">
      <section className="container mt-0">
        <div className="flex justify-center py-5">
          <div className="w-96 bg-indigo-600 rounded-xl shadow-lg p-5">
            <h2 className="text-white text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-12 sm:grid-cols-12 gap-x-2">
                <div className="mb-5 col-span-6 sm:col-span-12">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="w-full py-2 px-2 rounded-lg focus:ring-1 focus:ring-white "
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Steve"
                    required
                  />
                </div>
                <div className="mb-5 col-span-6 sm:col-span-12 ">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="w-full py-2 px-2 rounded-lg focus:ring-1 focus:ring-white "
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Jobs"
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="mobile">Mobile</label>
                <input
                  className="w-full py-2 px-2 rounded-lg focus:ring-1 focus:ring-white "
                  type="text"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="9876543210"
                  required
                />
              </div>
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
                  placeholder="password"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  className="w-full py-2 px-2 rounded-lg focus:ring-1 focus:ring-white "
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="confirm password"
                  required
                />
              </div>
              <div className="mb-5">
                <button
                  className="btn text-base bg-indigo-600 w-full border border-white hover:bg-indigo-700"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <div className="mb-5">
                <p className="text-center text-white">
                  Already have an account?{" "}
                  <Link className="underline" to={routes.login}>
                    Login
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

export default SignupPage;
