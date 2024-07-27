import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto ">
        <Navbar />
        <div></div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
