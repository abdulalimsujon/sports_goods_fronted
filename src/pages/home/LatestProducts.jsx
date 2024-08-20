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

  console.log("pooling data", data);

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
    <div className="max-w-[1580px] mx-auto mt-10">
      <div className="">
        <div className="grid grid-cols-12 mx-auto ">
          <div
            className="col-span-3 bg-gray-50 "
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="h1 text-xl">
              <div className="border mx-auto bg-amber-200 ">
                <h1 className="text-center p-4">All Category</h1>
              </div>

              {categories.map((category) => (
                <ul className="pl-8" key={category}>
                  <li
                    onClick={() => handleCategory(category)}
                    className="pb-5 mx-auto  w-28 h-10 border border-amber-500 mt-5 text-center hover:bg-amber-200"
                  >
                    {category}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div
            className="col-span-9 pl-5"
            data-aos="fade-up-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div className="bg-gray-50">
              <h1 className="text-center text-3xl p-4 text-amber-300 mb-5">
                Latest Product
              </h1>
            </div>

            <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-content-evenly max-w-[1600px]">
              {products?.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
