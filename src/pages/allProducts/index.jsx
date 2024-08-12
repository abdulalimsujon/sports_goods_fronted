import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import ProductCard from "../../components/utilities/ProductCard";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { categories } from "./product.const";
import {
  useGetProductBySearchQuery,
  useGetProductsQuery,
} from "../../redux/api/api";
import Toast from "../../components/utilities/Toast";

const Allproducts = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const searchTerm = queryParams.get("searchTerm") || "";
  const { category } = useParams();

  //get all the product
  const {
    data,
    isLoading: allDataLoading,
    error: allDataError,
  } = useGetProductsQuery();

  // get data as search from the search button in nav
  const {
    data: productData,
    isLoading,
    error,
  } = useGetProductBySearchQuery(searchTerm);

  //get data of a category
  const {
    data: categetoryData,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetProductBySearchQuery(category);

  console.log(categetoryData);

  const [isHovered, setIsHovered] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  if (isLoading || categoryLoading || allDataLoading) {
    return <LoaderSpinner />;
  }

  if (error || categoryError || allDataError) {
    return Toast("Cannot get data !!", "error");
  }
  let products;

  if (searchTerm) {
    products = productData?.data?.result;
  } else if (category) {
    products = categetoryData?.data?.result;
  } else {
    products = data?.data?.result;
  }

  return (
    <div>
      <div className="fixed z-50">
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
          <div
            className={`absolute left-0 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 ${
              isHovered ? "opacity-100 z-40" : "opacity-0 z-10"
            }`}
          >
            <ul className="space-y-2">
              <li
                className="relative"
                onMouseEnter={() => {
                  setActiveSubMenu("category");
                  setHoveredCategory("category");
                }}
                onMouseLeave={() => {
                  if (hoveredCategory !== "category") {
                    setActiveSubMenu(null);
                  }
                }}
              >
                Category
                {activeSubMenu === "category" && (
                  <ul className="absolute left-full top-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg space-y-2 z-20">
                    {categories.map((category) => (
                      <li
                        key={category}
                        className="relative"
                        onMouseEnter={() => setHoveredCategory(category)}
                        onMouseLeave={() => {
                          if (hoveredCategory !== category) {
                            setActiveSubMenu(null);
                          }
                        }}
                      >
                        <NavLink
                          to={`/get-products/${category}`}
                          className="block p-2 hover:bg-gray-200 hover:text-amber-500 w-full"
                          onClick={() => setActiveSubMenu(null)} // Optional: Close submenu on click
                        >
                          {category}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li
                className="relative"
                onMouseEnter={() => setActiveSubMenu("price")}
                onMouseLeave={() => {
                  if (hoveredCategory !== "price") {
                    setActiveSubMenu(null);
                  }
                }}
              >
                Price
                {activeSubMenu === "price" && (
                  <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg space-y-2 z-50">
                    <li className="p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                      Price Range 1
                    </li>
                    <li className="p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                      Price Range 2
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="relative"
                onMouseEnter={() => setActiveSubMenu("brand")}
                onMouseLeave={() => {
                  if (hoveredCategory !== "brand") {
                    setActiveSubMenu(null);
                  }
                }}
              >
                Brand
                {activeSubMenu === "brand" && (
                  <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg space-y-2 z-50">
                    <li className="p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                      Brand 1
                    </li>
                    <li className="p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                      Brand 2
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="relative"
                onMouseEnter={() => setActiveSubMenu("rating")}
                onMouseLeave={() => {
                  if (hoveredCategory !== "rating") {
                    setActiveSubMenu(null);
                  }
                }}
              >
                Rating
                {activeSubMenu === "rating" && (
                  <ul className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg space-y-2 z-50">
                    <li className="p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                      Rating 1
                    </li>
                    <li className="p-2 hover:bg-gray-200 cursor-pointer hover:text-amber-500">
                      Rating 2
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pl-2 ml-80 mr-36 pt-10 relative">
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
