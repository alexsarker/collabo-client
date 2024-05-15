import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="bg-back px-2 md:px-6 lg:px-0 text-center md:text-start lg:text-start">
        <ScrollRestoration />
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
