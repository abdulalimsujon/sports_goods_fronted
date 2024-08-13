import { useState } from "react";

const RangeSlider = () => {
  // Initialize the state for the range value
  const [value, setValue] = useState(40);

  // Handle the change event
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className=" w-48">
      <div className="">
        <p>Value: {value}</p>
      </div>
      <input
        type="range"
        min={0}
        max={1000}
        value={value}
        className="range range-primary"
        onChange={handleChange}
      />
      <div className="flex justify-between">
        <div className="ml-0  h-5">
          <h1>0</h1>
        </div>
        <div className="mr-0  h-5">
          <h1>1000</h1>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
