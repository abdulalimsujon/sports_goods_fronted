import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="pb-16">
      <header className="h-20 w-full bg-amber-500 fixed z-[999] text-2xl ">
        <nav className="  h-full max-w-[1620px] px-[20px] mx-auto flex justify-between items-center">
          <span className="text-3xl  text-white">Sujon Sports Club</span>
          <ul className="space-x-5 text-white flex font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allproducts">All Product</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/cart">
              <strong className="flex">
                <CgShoppingCart size={25} className="text-bold text-2xl" />
                <div className="badge mr-3 mb-5">{cart.cart.length}</div>
              </strong>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
