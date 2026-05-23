import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Footer from "../components/UI/Footer/Footer";

const Container = () => {
  return <div className="w-full min-h-screen flex flex-col pt-5">
    <Header />
    <Outlet />
    <Footer/>
  </div>;
}

export default Container;