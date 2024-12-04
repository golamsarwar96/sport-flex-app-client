import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Loading from "../components/Loading";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MainLayout = () => {
  return (
    <div className="font-montserrat font-bold max-w-7xl mx-auto">
      <Toaster></Toaster>
      <section>
        <Navbar></Navbar>
      </section>
      <section className="min-h-[calc(100vh-232px)]">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
