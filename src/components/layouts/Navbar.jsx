import { NavLink, useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { setSearchTerm } from "../../redux/features/filterSlice";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchTerm = (e) => {
    e.preventDefault();
    const searchTerm = e.target.product.value.trim();
    dispatch(setSearchTerm(searchTerm));
    navigate("/allProducts");
  };

  const activeLinkStyle = "text-yellow-300";
  const linkStyle = "p-4 lg:p-0 hover:text-slate-500";

  return (
    <div className="pb-16">
      <header className="h-20 w-full bg-amber-500 fixed z-[999] text-xl">
        <nav className="h-full max-w-[1620px] px-[20px] mx-auto flex items-center justify-between">
          <span className="text-2xl text-white">Sujon Sports Club</span>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white text-3xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <form onSubmit={handleSearchTerm} className="flex items-center">
            <input
              type="text"
              name="product"
              placeholder="Find Sports Equipment"
              className="p-3 w-80 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-slate-300 border-0 p-3 focus:outline-none focus:ring-0"
            >
              <CiSearch size={30} />
            </button>
          </form>

          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:space-x-5 text-white font-bold absolute lg:static top-20 left-0 w-full lg:w-auto bg-amber-500 lg:bg-transparent z-[998] items-center justify-center`}
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
              to="/get-products"
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
              Manage Products
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
                <div className="absolute top-[-10px] right-[10px] bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
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
