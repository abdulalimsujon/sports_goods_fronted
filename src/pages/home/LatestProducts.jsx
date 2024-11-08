import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/utilities/ProductCard";
import { useGetLatestProductQuery } from "../../redux/api/api";

import { useDispatch } from "react-redux";

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

  // const handleCategory = (category) => {
  //   dispatch(setCategory(category));
  //   navigate(`/get-products`);
  // };

  return (
    <div className="mt-3">
      <div className="flex flex-col mx-auto">
        <h1 className="text-center font-bold text-3xl">New Arrivals</h1>
        <h3 className="text-center text-xl">Just in now</h3>
        <h3 className="text-center text-xl">--//--</h3>
      </div>
      <div className="mx-auto  ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 mx-auto ">
            {" "}
            {/* Adjusted gap */}
            {/* Column 1 (4 columns wide on large screens) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 lg:ml-28 mx-auto lg:pl-20">
              {products?.slice(0, 2).map((product) => (
                <div key={product.id} className="rounded mb-2">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            {/* Column 2 (4 columns wide on large screens) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-gray-200 w-full mb-14 my-auto sm:mx-auto">
              <img src="https://i.ibb.co.com/7yFRkW7/sport29.webp" alt="" />
              <div className="w-full h-32 hover:text-amber-500">
                <h1 className="text-center">
                  Beige Sports Bag Inlander Beige Sports
                </h1>
                <h1 className="text-center"> Bag$890</h1>
              </div>
            </div>
            {/* Column 3 (4 columns wide on large screens) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 mx-auto lg:pr-44 ">
              <div className="gap-2">
                {products?.slice(3, 5).map((product) => (
                  <div key={product.id} className="bg-white rounded mb-2">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
