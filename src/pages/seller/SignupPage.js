import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sellerSignup } from "../../actions/sellerActions";
import routes from "../../utils/routes";
import { Logo } from "../../components/logos";
import { FormGroup } from "../../components/forms/containers";
import { Label, Input } from "../../components/forms/inputs";
import { Button } from "../../components/buttons";
import { Error } from "../../components/messages";
import { Loader } from "../../components/loaders";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  const { seller } = useSelector((state) => state.sellerLogin);
  const { loading, error } = useSelector((state) => state.sellerSignup);

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

    if (password !== confirmPassword) {
      setMessage("Password must match.");
      return;
    }

    dispatch(sellerSignup(email, password));
  };

  return (
    <main className="bg-indigo-600">
      <section className="flex flex-col justify-center  items-center h-screen">
        <div className="w-11/12 sm:w-96 bg-white rounded-xl shadow-lg px-10 py-5">
          <Logo />
          <h1 className="my-4">Signup</h1>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                className="w-full"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seller@example.com"
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
                placeholder="don't share your password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                className="w-full"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="confirm password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Button className="w-full" type="submit">
                Signup
              </Button>
            </FormGroup>
            <FormGroup className="flex justify-center mb-0">
              {loading && <Loader />}
              {error && <Error>{error}</Error>}
              {message && <Error>{message}</Error>}
            </FormGroup>
          </form>
        </div>
        <div className="mt-5">
          <p className="text-center text-white">
            Already have an account?{" "}
            <Link className="underline" to={routes.login}>
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
