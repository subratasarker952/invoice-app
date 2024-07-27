import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between h-10 items-center  print:hidden">
      <div>
        <img src="" alt="" />
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
