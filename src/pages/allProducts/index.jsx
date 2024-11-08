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
  setLimit,
  setPage,
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
  const page = useSelector((state) => state.filters.page);
  const limit = useSelector((state) => state.filters.limit);
  const [list, setList] = useState(3);
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer visibility state

  const dispatch = useDispatch();

  const { data, error, isLoading, refetch } = useGetFilterProductsQuery({
    price,
    category,
    brand,
    rating,
    sort,
    searchTerm,
    page,
    limit,
  });

  useEffect(() => {
    refetch();
  }, [refetch, page, limit]);

  if (isLoading) {
    return <LoaderSpinner />;
  }
  if (error) {
    Toast("something went wrong", "error");
  }

  const handleReset = () => {
    dispatch(clearAllFilters());
    setPage(1);
    refetch();
  };

  const handleSortChange = (sortOption) => {
    dispatch(setSort(sortOption));
    setPage(1);
    refetch();
  };

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    refetch();
  };

  const handleLimitChange = (event) => {
    dispatch(setLimit(parseInt(event.target.value)));
    refetch();
  };

  const totalPages = data?.data?.meta?.totalPage;
  const totalProducts = data?.data?.meta?.totalProducts;

  return (
    <div className="h-auto max-w-[1580px] mx-auto mt-10">
      <div className="container max-w-[1580px]">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Drawer Button for Small Screens */}
          <div className="lg:hidden w-full mb-4">
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="btn bg-amber-500 w-full text-xl"
            >
              {drawerOpen ? "Close Filters" : "Open Filters"}
            </button>
          </div>

          {/* Sidebar / Drawer */}
          <div
            className={`${
              drawerOpen ? "block" : "hidden"
            } lg:block lg:w-1/5 w-full bg-white lg:bg-transparent p-4 shadow-lg lg:shadow-none`}
          >
            <ReusableAccordian
              title="category"
              contents={categories}
              setElement={(value) => {
                dispatch(setCategory(value));
                setPage(1);
                refetch();
              }}
            />
            <ReusableAccordian
              title="brand"
              contents={Brands}
              setElement={(value) => {
                dispatch(setBrand(value));
                setPage(1);
                refetch();
              }}
            />
            <ReusableRangeSlider
              min={0}
              max={5}
              title={"Rating"}
              setElement={(value) => {
                dispatch(setRating(value));
                setPage(1);
                refetch();
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

          {/* Product Grid */}
          <div className="lg:w-3/4 w-full">
            <div className="border border-spacing-4  mb-2 flex justify-between items-center">
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
              <div className="flex items-center">
                <div
                  onClick={() => setList(3)}
                  className="p-2 bg-amber-300 ml-2 cursor-pointer"
                >
                  <h1>lll</h1>
                </div>
                <div
                  onClick={() => setList(4)}
                  className="p-2 bg-amber-300 ml-2 cursor-pointer"
                >
                  <h1>llll</h1>
                </div>
                <div className="ml-4">
                  <label htmlFor="limit" className="mr-2 text-xl">
                    Items per page:
                  </label>
                  <select
                    id="limit"
                    value={limit}
                    onChange={handleLimitChange}
                    className="border border-amber-300 p-2 rounded"
                  >
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={16}>16</option>
                    <option value={32}>32</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className={`grid sm:grid-cols-1 md:grid-cols-2 ${
                  list === 3
                    ? "lg:grid-cols-3 gap-2"
                    : "lg:grid-cols-4 gap-1 lg:w-full "
                }`}
              >
                {data?.data?.result?.length > 0 ? (
                  data?.data?.result?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <p className="col-span-full text-center">No data found</p>
                )}
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-4 space-x-2 mx-5">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className={`${
                  page === 1
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-amber-400 hover:bg-amber-500"
                } px-4 py-2 rounded`}
              >
                Previous
              </button>

              <p className="bg-red-300 px-4 py-2 rounded">{page}</p>

              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className={`${
                  page === totalPages || totalProducts === 0
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-amber-400 hover:bg-amber-500"
                } px-4 py-2 rounded`}
              >
                Next
              </button>
            </div>
            <h1 className="text-amber-500 text-2xl text-center">
              Total Page: {totalPages}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
