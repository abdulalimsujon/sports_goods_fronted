import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useGetProductWithPriceQuery } from "../../redux/api/api";
// import LoaderSpinner from "../../components/utilities/LoaderSpinner";
// import Toast from "../../components/utilities/Toast";

const RangeSlider = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  // Handle the change event
  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);

    // Navigate to the endpoint with the new price value
    navigate(`/get-products?price=${newValue}`);
  };

  return (
    <div className="w-full">
      <div className="">
        <p>Price: {value}</p>
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
        <div className="ml-0 h-5">
          <h1>0</h1>
        </div>
        <div className="mr-0 h-5">
          <h1>1000</h1>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
