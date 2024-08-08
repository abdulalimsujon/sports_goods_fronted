import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import ProductCard from "../../components/utilities/ProductCard";
import { useGetProductsQuery } from "../../redux/api/api";

const Allproducts = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  const products = data?.data;

  return (
    <div className="flex justify-center items-center pt-16">
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-content-evenly max-w-[1600px] ">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
