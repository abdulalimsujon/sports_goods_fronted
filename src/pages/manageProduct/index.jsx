import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import ProductCard from "../../components/utilities/ProductCard";
import { useLocation } from "react-router-dom";
import RangeSlider from "../allProducts/RangeSlider";

import {
  useGetProductBySearchQuery,
  useGetProductWithPriceQuery,
} from "../../redux/api/api";
import Toast from "../../components/utilities/Toast";
import Accordian from "../../components/utilities/Accordian";
import { Brands, categories } from "../allProducts/product.const";

const Allproducts = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const searchTerm = queryParams.get("searchTerm") || "";
  const price = queryParams.get("price") || "";

  //get the product using price as query

  const {
    data: priceData,
    isLoading: priceLoading,
    isError: priceError,
  } = useGetProductWithPriceQuery(price);

  // Get data as search from the search button in nav,category product ,brand product
  const {
    data: productData,
    isLoading,
    isError,
  } = useGetProductBySearchQuery(searchTerm);

  if (isLoading || priceLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }
  if (isError || priceError) {
    return Toast("something went wrong", "error");
  }

  let products;

  if (searchTerm) {
    products = productData?.data;
  }
  if (price) {
    products = priceData?.data;
    console.log(products);
  }

  return (
    <div className="h-auto max-w-[1580px] mx-auto mt-10">
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
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-2 max-w-[1600px]">
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
