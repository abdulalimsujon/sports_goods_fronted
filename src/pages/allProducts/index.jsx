import RangeSlider from "../allProducts/RangeSlider";
import Accordian from "../../components/utilities/Accordian";
import { Brands, categories } from "./product.const";
import { useSelector } from "react-redux";
import { useGetFilterProductsQuery } from "../../redux/api/api";
import LoaderSpinner from "../../components/utilities/LoaderSpinner";

const Allproducts = () => {
  const category = useSelector((state) => state.filters.category);
  const price = useSelector((state) => state.filters.price);

  console.log(price, category);
  const { data, error, isLoading } = useGetFilterProductsQuery({
    price,
    category,
  });

  if (isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  console.log("data is here", data);

  return (
    <div className="h-auto max-w-[1580px] mx-auto mt-10">
      <div className="container max-w-[1580px]">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Sidebar for large screens */}
          <div className="lg:w-1/4 w-full">
            <Accordian title="category" contents={categories} />
            <Accordian title="brand" contents={Brands} />
            <RangeSlider></RangeSlider>
          </div>

          {/* Product Grid for large screens */}
          <div className="lg:w-3/4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
