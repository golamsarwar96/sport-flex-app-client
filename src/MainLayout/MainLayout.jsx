import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const MainLayout = () => {
  return (
    <div className="font-montserrat font-bold max-w-screen-2xl mx-auto bg-gray-50">
      <Tooltip id="my-tooltip"></Tooltip>
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
