import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <h2>Logo</h2>
      </div>
      <div className="flex items-center justify-between gap-16">
        <ul className="flex items-center justify-between gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "group flex  cursor-pointer flex-col text-sky-300"
                : "flex flex-col text-white"
            }
          >
            Home{" "}
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/One"
            className={({ isActive }) =>
              isActive
                ? "group flex  cursor-pointer flex-col text-sky-300"
                : "flex flex-col text-white"
            }
          >
            One
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/two"
            className={({ isActive }) =>
              isActive
                ? "group flex  cursor-pointer flex-col text-sky-300"
                : "flex flex-col text-white"
            }
          >
            Two
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/three"
            className={({ isActive }) =>
              isActive
                ? "group flex  cursor-pointer flex-col text-sky-300"
                : "flex flex-col text-white"
            }
          >
            Three
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </ul>
        <div className="flex items-center justify-between gap-5">
          <Link to='/login' className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90 active:scale-100">
            Log In
          </Link>
          <Link to='/register' className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90 active:scale-100">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
