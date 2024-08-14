import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import ProductCard from "../../components/utilities/ProductCard";
import { useLocation } from "react-router-dom";
import RangeSlider from "../allProducts/RangeSlider";

import { useGetProductBySearchQuery } from "../../redux/api/api";
import Toast from "../../components/utilities/Toast";
import Accordian from "../../components/utilities/Accordian";
import { Brands, categories } from "./product.const";

const Allproducts = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const searchTerm = queryParams.get("searchTerm") || "";

  console.log("Search Term:", searchTerm);

  // Get data as search from the search button in nav
  const {
    data: productData,
    isLoading,
    error,
  } = useGetProductBySearchQuery(searchTerm);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (error) {
    return Toast("Cannot get data !!", "error");
  }

  let products;

  if (searchTerm) {
    products = productData?.data;
  }

  return (
    <div className="h-screen max-w-[1580px] mx-auto mt-10">
      <div className="container max-w-[1580px]">
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Sidebar for large screens */}
          <div className="lg:w-1/4 w-full">
            <Accordian title="Category" contents={categories} />
            <Accordian title="Brand" contents={Brands} />
            <RangeSlider></RangeSlider>
          </div>

          {/* Product Grid for large screens */}
          <div className="lg:w-3/4 w-full">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-2">
              {products?.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <p>No products found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
