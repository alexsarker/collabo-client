import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <ScrollRestoration />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
