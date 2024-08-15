import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-4 text-black">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-2xl font-bold text-black transition-all duration-200 hover:scale-110">
        <h2>
          <span className="text-emerald-500">Organ</span>Store
        </h2>
      </div>
      {/* Routes for small screen */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-emerald-500">
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 -left-36 p-2 shadow"
        >
          {/* <ul className="items-center justify-between gap-10 hidden sm:flex"> */}
            <NavLink
            to='#'
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                  : "flex flex-col text-white"
              }
            >
              <span>Home</span>
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink
            to='#products'
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                  : "flex flex-col text-white"
              }
            >
              <span>Products</span>

              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink
            to='#about'
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                  : "flex flex-col text-white"
              }
            >
              <span>About us</span>
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink
            to='#contact'
              className={({ isActive }) =>
                isActive
                  ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                  : "flex flex-col text-white"
              }
            >
              <span>Contact</span>
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <Link
            to="/login"
            className="rounded bg-emerald-500 px-3 py-1 w-20 mb-2 text-white border-2 border-emerald-500 transition-all duration-300 hover:scale-90 hover:text-white active:scale-100"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="rounded bg-transparent px-3 py-1 w-20 mb-2 text-emerald-500 border-2 border-emerald-500 transition-all duration-300 hover:scale-90 hover:bg-emerald-500 hover:text-white active:scale-100"
          >
            Register
          </Link>
        </ul>
      </div>
      {/* Routes for large screen */}
      <div className="hidden sm:flex items-center justify-between gap-16">
        <ul className="flex items-center justify-between gap-10">
          <NavLink
          to='#'
            className={({ isActive }) =>
              isActive
                ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                : "flex flex-col text-white"
            }
          >
            <span>Home</span>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <li>/</li>
          <NavLink
          to='#products'
            className={({ isActive }) =>
              isActive
                ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                : "flex flex-col text-white"
            }
          >
            <span>Products</span>

            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <li>/</li>
          <NavLink
          to='#about'
            className={({ isActive }) =>
              isActive
                ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                : "flex flex-col text-white"
            }
          >
            <span>About us</span>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <li>/</li>
          <NavLink
          to='#contact'
            className={({ isActive }) =>
              isActive
                ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                : "flex flex-col text-white"
            }
          >
            <span>Contact</span>
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </ul>
        <div className="flex items-center justify-between gap-5">
          <Link
            to="/login"
            className="rounded bg-transparent px-6 py-2 text-emerald-500 border-2 border-emerald-500 transition-all duration-300 hover:scale-90 hover:bg-emerald-500 hover:text-white active:scale-100"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="rounded bg-transparent px-6 py-2 text-emerald-500 border-2 border-emerald-500 transition-all duration-300 hover:scale-90 hover:bg-emerald-500 hover:text-white active:scale-100"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
