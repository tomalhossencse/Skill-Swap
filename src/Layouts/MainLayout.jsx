import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../Utility/ScrollToTop";
import Loading from "../Utility/Loading";
const MianLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </main>
      <Footer />
      {/* <ToastContainer /> */}
      <Toaster />
    </div>
  );
};

export default MianLayout;
