import { NavLink } from "react-router-dom";
import logo from '/logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-white items-center  print:hidden">
      <div>
        <img className="w-60" src={logo} alt="" />
      </div>
      <div>
        <NavLink className={"p-4"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"p-4"} to={"/orderInfo"}>
          OrderInfo
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
