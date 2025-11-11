import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import SideBar from "../../Components/SideBar/SideBar";

export default function Layout() {
  return (
    <>
      <Nav />
      <div className=" lg:flex lg:flex-row-reverse md:block gap-6 px-4 mt-10 w-full">
        <div className="lg:w-2/7 md:w-full lg:relative md:relative  mt-30 rounded-xl shadow-xl h-fit">
          <SideBar />
        </div>
        <div className="mt-20 lg:w-3/4 md:w-full lg:ml-6 md:ml-0">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </>
  );
}
