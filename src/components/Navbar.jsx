import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <div className="flex gap-3 p-2 bg-cyan-950  border-none rounded-xl lg:items-center flex-col lg:flex-row  text-white">
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-amber-500 px-4 py-2 rounded-3xl" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-amber-500 px-4 py-2 rounded-3xl" : ""
        }
        to="/allequipment"
      >
        All Sport Equipment
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-amber-500 px-4 py-2 rounded-3xl" : ""
        }
        to="addequipment"
      >
        Add Equipment
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-amber-500 px-4 py-2 rounded-3xl" : ""
        }
        to="/myequipment"
      >
        My Equipment List
      </NavLink>
    </div>
  );

  return (
    <div className="navbar bg-cyan-950">
      <div className="navbar-start">
        <div className="dropdown text-white">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="md:text-3xl text-xl">
          <span className="text-white">Equi</span>
          <span className="text-amber-500">Sports</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-3">
        <Link to="/login">
          <button className=" bg-amber-500 border-none text-white md:px-4 md:py-2 px-3 py-1 rounded-full">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className=" bg-amber-500 border-none  text-white  md:px-4 md:py-2 px-3 py-1 rounded-full">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;