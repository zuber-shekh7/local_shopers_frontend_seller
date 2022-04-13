import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sellerLogin } from "../../actions/sellerActions";
import routes from "../../utils/routes";
import { Logo } from "../../components/logos";
import { FormGroup } from "../../components/forms/containers";
import { Input, Label } from "../../components/forms/inputs";
import { Button } from "../../components/buttons";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, seller, error } = useSelector((state) => state.sellerLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (seller) {
      navigate(routes.dashboard);
    }
  }, [seller, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      return;
    }

    dispatch(sellerLogin(email, password));
  };

  const handleGuestLogin = () => {
    const email = process.env.REACT_APP_GUEST_USER_EMAIL;
    const password = process.env.REACT_APP_GUEST_USER_PASSWORD;

    dispatch(sellerLogin(email, password));
  };

  return (
    <main className="bg-indigo-600">
      <section className="flex flex-col justify-center  items-center h-screen">
        <div className="w-11/12 sm:w-96 bg-white rounded-xl shadow-lg p-10">
          <Logo />
          <h1 className="my-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <FormGroup className="mb-5">
              <Label htmlFor="email">Email</Label>
              <Input
                className="w-full"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                className="w-full"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Button className="w-full" type="submit">
                Login
              </Button>
            </FormGroup>
            <FormGroup className="flex justify-center mb-0">
              {loading && <Loader />}
              {error && <Error>{error}</Error>}
            </FormGroup>
          </form>
        </div>
        <div className="mt-5">
          <p className="text-center text-white">
            Don't have an account?{" "}
            <Link className="underline" to={routes.signup}>
              Signup
            </Link>
          </p>
          <p className="text-center text-white">
            Login as{" "}
            <button
              onClick={() => handleGuestLogin()}
              className="underline"
              to={routes.signup}
            >
              Guest User
            </button>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
