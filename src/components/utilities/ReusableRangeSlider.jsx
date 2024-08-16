import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const ReusableRangeSlider = ({ min, max, title, setElement }) => {
  const [value, setValue] = useState(min); // Initialize value with min
  const dispatch = useDispatch();

  // Handle the change event
  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    dispatch(setElement(newValue));
  };

  return (
    <div className="w-full">
      <div className="">
        <p>
          {title}: {value}
        </p>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="range range-primary"
        onChange={handleChange}
      />
      <div className="flex justify-between">
        <div className="ml-0 h-5">
          <h1>{min}</h1> {/* Use min value */}
        </div>
        <div className="mr-0 h-5">
          <h1>{max}</h1> {/* Use max value */}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
ReusableRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  setElement: PropTypes.func.isRequired,
};

export default ReusableRangeSlider;
