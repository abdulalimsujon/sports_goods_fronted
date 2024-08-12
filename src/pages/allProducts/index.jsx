import { useState } from "react";
import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import ProductCard from "../../components/utilities/ProductCard";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useGetProductByNameQuery } from "../../redux/api/api";

const Allproducts = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const searchTerm = queryParams.get("searchTerm") || "";

  const {
    data: productData,
    isLoading,
    error,
  } = useGetProductByNameQuery(searchTerm);

  const [isHovered, setIsHovered] = useState(false);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = productData?.data?.result;

  return (
    <div>
      <div className="fixed">
        <div
          className="relative ml-32 pt-5 mr-5"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold hover:text-amber-500 flex items-center gap-2">
              Filter the Product
              {isHovered ? <FaAngleDown /> : <IoIosArrowUp />}
            </h1>
          </div>
          {/* Dropdown */}
          <div
            className={`absolute left-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 z-10 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul>
              <li className="relative p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                Category
              </li>
              <li className="relative p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                Price
              </li>
              <li className="relative p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                Brand
              </li>
              <li className="relative p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                Rating
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pl-2 ml-80 mr-36 pt-10">
        <div className="flex justify-center items-center">
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-content-evenly max-w-[1600px]">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
