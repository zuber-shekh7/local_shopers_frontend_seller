import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sellerSignup } from "../../actions/sellerActions";
import LoginImage from "../../assets/images/login.svg";

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
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto mt-10 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-100 rounded-xl shadow-lg p-10">
            <h2 className="text-4xl font-bold text-center mb-5">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Steve"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Jobs"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block" htmlFor="mobile">
                  Mobile
                </label>
                <input
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                  type="text"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="9876543210"
                  required
                />
              </div>
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
                  placeholder="password"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
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
                  className="w-full py-2 text-lg bg-indigo-500 rounded-lg text-white"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              {error && (
                <div className="mb-5 text-center">
                  <p className="text-red-500">{error}</p>
                </div>
              )}
              {message && (
                <div className="mb-5 text-center">
                  <p className="text-red-500">{message}</p>
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

export default SignupPage;
