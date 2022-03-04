import React from "react";
import { Outlet } from "react-router-dom";

const LoginContainer = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default LoginContainer;
