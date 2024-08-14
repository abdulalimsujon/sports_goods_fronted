import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Accordian = ({ title, contents }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);

  const handleClickOutside = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={accordionRef}
      className="collapse collapse-arrow bg-base-200 mb-2"
    >
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
        className="collapse-checkbox hidden"
      />
      <div
        className="collapse-title text-xl font-medium cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </div>
      {isOpen && (
        <div className="collapse-content mt-2 space-y-2">
          {contents?.map((c, id) => (
            <NavLink
              to={`/get-products?searchTerm=${c}`}
              key={id}
              className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setIsOpen(false)} // Optionally close the accordion when an item is clicked
            >
              {c}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

// PropTypes validation
Accordian.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.string).isRequired, // Corrected prop name
};

export default Accordian;
