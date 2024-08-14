import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 text-black">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-bold text-black transition-all duration-200 hover:scale-110">
        <h2>OrganStore</h2>
      </div>
      <div className="flex items-center justify-between gap-16">
        <ul className="flex items-center justify-between gap-10">
          <a
            href="#"
            className={({ isActive }) =>
              isActive
                ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                : "flex flex-col text-white"
            }
          >
            Home
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <li>/</li>
          <a
            href="#products"
            className={({ isActive }) =>
              isActive
                ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                : "flex flex-col text-white"
            }
          >
            Products
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <li>/</li>
          <a
            href="#about"
            className={({ isActive }) =>
              isActive
                ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                : "flex flex-col text-white"
            }
          >
            About us
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <li>/</li>
          <a
            href="#contact"
            className={({ isActive }) =>
              isActive
                ? "group flex cursor-pointer flex-col text-emerald-300 font-semibold"
                : "flex flex-col text-white"
            }
          >
            Contact
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </ul>
        <div className="flex items-center justify-between gap-5">
          <Link
            to="/login"
            className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90 active:scale-100"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90 active:scale-100"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
