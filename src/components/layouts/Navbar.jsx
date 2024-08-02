import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-16 bg-green-500">
      <nav className=" h-full max-w-[1220px] px-[20px] mx-auto flex justify-between items-center ">
        <span className="text-3xl color-primary">Sujon Sports Club</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allproducts">All Product</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
