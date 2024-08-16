import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const ReusableAccordian = ({ title, contents, setElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);
  const dispatch = useDispatch();

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

  const handleItemClick = (item) => {
    dispatch(setElement(item));
    setIsOpen(false); // Optionally close the accordion
  };

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
          <ul>
            {contents?.map((c, id) => (
              <li
                key={id}
                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleItemClick(c)}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

ReusableAccordian.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
  setElement: PropTypes.func.isRequired,
};

export default ReusableAccordian;
