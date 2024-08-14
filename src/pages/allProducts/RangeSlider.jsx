import { useState } from "react";
import { useGetProductWithPriceQuery } from "../../redux/api/api";
import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import Toast from "../../components/utilities/Toast";

const RangeSlider = () => {
  // Initialize the state for the range value
  const [value, setValue] = useState(0);

  const { data, isLoading, isError } = useGetProductWithPriceQuery(value);
  if (isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }
  if (isError) {
    return Toast("something went wrong", "error");
  }

  // Handle the change event
  const handleChange = (event) => {
    setValue(Number(event.target.value));
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
