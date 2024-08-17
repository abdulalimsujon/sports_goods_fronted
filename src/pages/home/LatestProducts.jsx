import ProductCard from "../../components/utilities/ProductCard";
import { useGetLatestProductQuery } from "../../redux/api/api";

const LatestProducts = () => {
  const { data, isLoading } = useGetLatestProductQuery();

  console.log(data);

  if (isLoading) {
    <p>loading..</p>;
  }

  const products = data?.data;

  return (
    <div>
      <div className="">
        <h1 className="text-center text-3xl p-10 text-amber-500 ">
          Lastest product
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-content-evenly max-w-[1600px]">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
