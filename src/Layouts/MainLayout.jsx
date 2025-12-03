import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
const MianLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      {/* <ToastContainer /> */}
      <Toaster />
    </div>
  );
};

export default MianLayout;
