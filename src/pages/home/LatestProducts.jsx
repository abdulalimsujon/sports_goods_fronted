import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/utilities/ProductCard";
import { useGetLatestProductQuery } from "../../redux/api/api";
import { categories } from "../allProducts/product.const";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/features/filterSlice";
import LoaderSpinner from "../../components/utilities/LoaderSpinner";

const LatestProducts = () => {
  // Polling every 30 seconds (30000 ms)
  const { data, isLoading } = useGetLatestProductQuery(null, {
    pollingInterval: 30000, // 30 seconds in milliseconds
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isLoading) {
    return <LoaderSpinner />;
  }

  const products = data?.data;

  const handleCategory = (category) => {
    dispatch(setCategory(category));
    navigate(`/get-products`);
  };

  return (
    <div className="max-w-[1580px] mx-auto mt-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sidebar for categories */}
        <div
          className="bg-gray-200 md:col-span-1"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="text-xl border-b bg-amber-200 text-center p-4">
            All Categories
          </div>
          <ul className="flex flex-col items-center space-y-4 mt-5">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategory(category)}
                className="cursor-pointer w-32 md:w-28 h-10 border border-amber-500 text-center hover:bg-amber-200"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Products Grid */}
        <div
          className="md:col-span-3"
          data-aos="fade-up-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="bg-gray-200 text-center p-4 mb-3">
            <h1 className="text-2xl md:text-3xl">Latest Products</h1>
          </div>
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {products?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
