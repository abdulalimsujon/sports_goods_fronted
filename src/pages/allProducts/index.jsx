import RangeSlider from "../allProducts/RangeSlider";
import { Brands, categories } from "./product.const";
import { useSelector } from "react-redux";
import { useGetFilterProductsQuery } from "../../redux/api/api";
import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import { Toast } from "../../components/utilities/Toast";
import ProductCard from "../../components/utilities/ProductCard";
import ReusableAccordian from "../../components/utilities/ReusableAccordian";
import { useSearchParams } from "react-router-dom";
import {
  setBrand,
  setCategory,
  setRating,
} from "../../redux/features/filterSlice";
import ReusableRangeSlider from "../../components/utilities/ReusableRangeSlider";

const Allproducts = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const category = useSelector((state) => state.filters.category);
  const price = useSelector((state) => state.filters.price);
  const brand = useSelector((state) => state.filters.brand);
  const rating = useSelector((state) => state.filters.rating);

  const { data, error, isLoading } = useGetFilterProductsQuery({
    price,
    category,
    brand,
    rating,
    searchTerm,
  });

  if (isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }
  if (error) {
    Toast("cannot get data", "error");
  }

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
            ></ReusableAccordian>
            <ReusableAccordian
              title="brand"
              contents={Brands}
              setElement={setBrand}
            ></ReusableAccordian>
            <ReusableRangeSlider
              min={0}
              max={5}
              title={"Rating"}
              setElement={setRating}
            ></ReusableRangeSlider>
            <RangeSlider></RangeSlider>
          </div>

          {/* Product Grid for large screens */}
          <div className="lg:w-3/4 w-full">
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
