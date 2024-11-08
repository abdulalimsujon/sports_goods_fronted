import { useState } from "react";
import ProductCard from "../../components/utilities/ProductCard";
import { useGetProductsQuery } from "../../redux/api/api";

const TopRatedProduct = () => {
  const { data } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(8); // Start by showing 12 products

  // Handle "Show More" button click
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Show 8 more each time
  };

  return (
    <div className="mx-20">
      <div className="w-full h-28 mb-10">
        <h1 className="text-3xl font-bold text-center py-8">
          Top Rated Product
        </h1>
        <h2 className="text-center">All Time Seller</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.data?.result?.slice(0, visibleCount).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {visibleCount < data?.data?.result?.length && (
        <div className="text-center mt-6 ">
          <div
            onClick={handleShowMore}
            className="px-6 w-48 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-300 mx-auto"
          >
            Show More
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRatedProduct;
