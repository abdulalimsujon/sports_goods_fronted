import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { AddToQuery } from "../../redux/features/QuerySlice";
import { useDispatch } from "react-redux";

const Accordion = ({ title, contents }) => {
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
                onClick={() => {
                  dispatch(AddToQuery({ [title]: c })); // Pass title as key and category as value
                  setIsOpen(false); // Optionally close the accordion
                }}
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

// PropTypes validation
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Accordion;
