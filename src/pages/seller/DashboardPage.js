import React from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const { seller } = useSelector((state) => state.sellerLogin);

  return (
    <main className="min-h-screen">
      <section className="m-10">
        <h1 className="text-4xl font-bold">Welcome {seller.firstName}</h1>
      </section>
    </main>
  );
};

export default DashboardPage;
