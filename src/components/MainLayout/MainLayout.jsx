import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
