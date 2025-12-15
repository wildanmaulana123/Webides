import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className=" h-full bg-[#F9F9F9] min-h-screen pt-16">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
