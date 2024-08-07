import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const activeLinkStyle = "text-yellow-300";
  const linkStyle = "p-4 lg:p-0 hover:text-slate-500";

  return (
    <div className="pb-16">
      <header className="h-20 w-full bg-amber-500 fixed z-[999] text-xl">
        <nav className="h-full max-w-[1620px] px-[20px] mx-auto flex justify-between items-center">
          <span className="text-2xl text-white">Sujon Sports Club</span>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white text-3xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:space-x-5 text-white font-bold absolute lg:static top-20 left-0 w-full lg:w-auto bg-amber-500 lg:bg-transparent z-[998]`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/allproducts"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              All Products
            </NavLink>
            <NavLink
              to="/manageproducts"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              Manage products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              <strong className="relative flex items-center">
                <CgShoppingCart size={30} className="text-bold text-2xl" />
                <div className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {cart.cart.length}
                </div>
              </strong>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
