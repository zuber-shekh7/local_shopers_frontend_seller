import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { Navigation } from "../../navigation";

const DefaultContainer = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultContainer;
