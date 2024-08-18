import { useEffect, useState } from "react";
import RangeSlider from "../allProducts/RangeSlider";
import { Brands, categories } from "./product.const";
import { useDispatch, useSelector } from "react-redux";
import { useGetFilterProductsQuery } from "../../redux/api/api";
import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import { Toast } from "../../components/utilities/Toast";
import ProductCard from "../../components/utilities/ProductCard";
import ReusableAccordian from "../../components/utilities/ReusableAccordian";

import {
  clearAllFilters,
  setBrand,
  setCategory,
  setRating,
  setSort,
} from "../../redux/features/filterSlice";
import ReusableRangeSlider from "../../components/utilities/ReusableRangeSlider";

const Allproducts = () => {
  const category = useSelector((state) => state.filters.category);
  const price = useSelector((state) => state.filters.price);
  const brand = useSelector((state) => state.filters.brand);
  const rating = useSelector((state) => state.filters.rating);
  const searchTerm = useSelector((state) => state.filters.searchTerm);
  const sort = useSelector((state) => state.filters.sort);
  const [list, setList] = useState(3);
  const dispatch = useDispatch();

  const { data, error, isLoading, refetch } = useGetFilterProductsQuery({
    price,
    category,
    brand,
    rating,
    sort,
    searchTerm,
  });

  useEffect(() => {
    refetch(); // Refetch the latest data when the component mounts
  }, [refetch]);

  if (isLoading) {
    return <LoaderSpinner />;
  }
  if (error) {
    Toast("something went wrong", "error");
  }

  const handleReset = () => {
    dispatch(clearAllFilters());
    refetch(); // Refetch data after resetting filters
  };

  const handleSortChange = (sortOption) => {
    dispatch(setSort(sortOption));
    refetch(); // Refetch data after changing sort option
  };

  return (
    <div className="h-auto max-w-[1580px] mx-auto mt-10">
      <div className="container max-w-[1580px]">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Sidebar for large screens */}
          <div className="lg:w-1/4 w-full">
            <ReusableAccordian
              title="category"
              contents={categories}
              setElement={(value) => {
                dispatch(setCategory(value));
                refetch(); // Refetch data after selecting a category
              }}
            />
            <ReusableAccordian
              title="brand"
              contents={Brands}
              setElement={(value) => {
                dispatch(setBrand(value));
                refetch(); // Refetch data after selecting a brand
              }}
            />
            <ReusableRangeSlider
              min={0}
              max={5}
              title={"Rating"}
              setElement={(value) => {
                dispatch(setRating(value));
                refetch(); // Refetch data after selecting a rating
              }}
            />
            <RangeSlider />
            <button
              onClick={handleReset}
              className="btn bg-slate-200 hover:bg-amber-500 w-full mt-2 text-2xl"
            >
              Reset Filters
            </button>
          </div>

          {/* Product Grid for large screens */}
          <div className="lg:w-3/4 w-full">
            <div className="border border-spacing-4 p-2 mb-2 flex justify-between">
              <div className="relative h-full w-48 bg-amber-400 group text-xl">
                <h1 className="p-2 text-center cursor-pointer text-xl text-white">
                  Sort By
                </h1>
                <ul className="absolute left-0 w-48 h-40 bg-white shadow-lg hidden group-hover:block z-[50]">
                  <li
                    onClick={() => handleSortChange("price")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Ascending
                  </li>
                  <li
                    onClick={() => handleSortChange("-price")}
                    className="px-4 py-2 cursor-pointer hover:bg-slate-200"
                  >
                    Descending
                  </li>
                </ul>
              </div>
              <div className="flex">
                <div
                  onClick={() => setList(3)}
                  className="p-2 bg-amber-300 ml-2"
                >
                  <h1>lll</h1>
                </div>
                <div
                  onClick={() => setList(4)}
                  className="p-2 bg-amber-300 ml-2"
                >
                  <h1 className="">lllll</h1>
                </div>
              </div>
            </div>
            <div
              className={`grid gap-2 ${
                list === 3
                  ? "grid-cols-3"
                  : list === 4
                  ? "grid-cols-4"
                  : "grid-cols-3" // Default to 1 column or any other fallback option
              }`}
            >
              {data?.data?.result?.length > 0 ? (
                data?.data?.result?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No data found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
