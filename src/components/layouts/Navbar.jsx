import { NavLink, useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { setCategory, setSearchTerm } from "../../redux/features/filterSlice";
import { categories } from "../../pages/allProducts/product.const";

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

  const handleCategory = (category) => {
    dispatch(setCategory(category)); // Set selected category in the filter state
    navigate("/allProducts"); // Redirect to the product listing page
  };

  const activeLinkStyle = "text-yellow-300";
  const linkStyle = "p-4 lg:p-0 hover:text-slate-500";

  return (
    <div className="pb-16 lg:w-full h-20 bg-amber-500">
      <header className="py-3">
        <nav className="h-full max-w-[1620px] px-4 sm:px-6 md:px-8 mx-auto flex items-center justify-between">
          <span className="text-2xl text-white">Sujon Sports Club</span>

          {/* Category Dropdown */}
          <div className="relative h-full w-48  group text-xl">
            <h1 className="p-2 text-center cursor-pointer text-xl text-white mb-3">
              Category
            </h1>
            <ul className="absolute left-0 w-96 bg-gray-50 shadow-lg hidden group-hover:block z-[50] ">
              <div className="grid grid-cols-3">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => handleCategory(category)}
                    className="px-4 py-2 hover:text-amber-300 cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </div>
            </ul>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white text-3xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <form
            onSubmit={handleSearchTerm}
            className="hidden md:flex items-center"
          >
            <input
              type="text"
              name="product"
              placeholder="Find Sports Equipment"
              className="p-2 md:p-3 w-full md:w-64 lg:w-80 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-slate-300 border-0 p-2 md:p-3 focus:outline-none focus:ring-0"
            >
              <CiSearch size={25} />
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
                <CgShoppingCart size={25} className="text-2xl" />
                <div className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.cart.length}
                </div>
              </strong>
            </NavLink>
          </ul>
        </nav>

        {/* Search Bar for Small Screens */}
        <form
          onSubmit={handleSearchTerm}
          className="flex md:hidden items-center mt-4 px-4"
        >
          <input
            type="text"
            name="product"
            placeholder="Find Sports Equipment"
            className="p-2 w-full focus:outline-none"
          />
          <button
            type="submit"
            className="bg-slate-300 border-0 p-2 focus:outline-none focus:ring-0"
          >
            <CiSearch size={25} />
          </button>
        </form>
      </header>
    </div>
  );
};

export default Navbar;
