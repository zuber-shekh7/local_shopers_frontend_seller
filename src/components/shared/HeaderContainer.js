import React from "react";

const HeaderContainer = ({ children }) => {
  return (
    <section className="bg-indigo-600 text-white p-5">
      <div className="container">{children}</div>
    </section>
  );
};

export default HeaderContainer;
