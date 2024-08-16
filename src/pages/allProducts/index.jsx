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
  const dispatch = useDispatch();

  console.log("sort", sort);

  const { data, error, isLoading } = useGetFilterProductsQuery({
    price,
    category,
    brand,
    rating,
    sort,
    searchTerm,
  });

  if (isLoading) {
    return <LoaderSpinner />;
  }
  if (error) {
    Toast("something went wrong", "error");
  }

  const handleReset = () => {
    dispatch(clearAllFilters());
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
              setElement={setCategory}
            />
            <ReusableAccordian
              title="brand"
              contents={Brands}
              setElement={setBrand}
            />
            <ReusableRangeSlider
              min={0}
              max={5}
              title={"Rating"}
              setElement={setRating}
            />
            <RangeSlider />
            <button
              onClick={handleReset}
              className="btn bg-slate-200 hover:bg-amber-500 w-full mt-2"
            >
              Reset Filters
            </button>
          </div>

          {/* Product Grid for large screens */}
          <div className="lg:w-3/4 w-full">
            <div className="border border-spacing-4 p-2 mb-2 flex justify-between">
              <div className="relative h-full w-48 bg-amber-400 group">
                <h1 className="pl-3 text-center cursor-pointer">Sort by</h1>
                <ul className="absolute left-0 w-48 h-40 bg-white shadow-lg hidden group-hover:block z-[50]">
                  <li
                    onClick={() => {
                      dispatch(setSort("price"));
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    Ascending
                  </li>
                  <li
                    onClick={() => {
                      dispatch(setSort("-price"));
                    }}
                    className="px-4 py-2  cursor-pointer hover:bg-slate-200"
                  >
                    Descending
                  </li>
                </ul>
              </div>
              <div>
                <h1>2</h1>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
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
