import { PhotoProvider, PhotoView } from "react-photo-view";
import { useGetSingleProductQuery } from "../../redux/api/api";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/features/CartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const p = data?.data;

  const {
    name,
    category,
    price,
    description,
    brand,
    stock_quantity,
    _id,
    image,
  } = p;

  const handleCart = async () => {
    dispatch(addTocart({ id: _id, name, image, price }));
    navigate("/cart");
  };

  return (
    <div className="flex justify-center items-center p-6 mt-20">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden ">
        <PhotoProvider>
          <PhotoView src={p.image}>
            <img
              src={p.image}
              alt={p.name || "Product Image"}
              className="w-full h-64 object-cover"
            />
          </PhotoView>
        </PhotoProvider>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-gray-700 mb-2">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Brand:</strong> {brand}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Stock Quantity:</strong> {stock_quantity}
          </p>
          <div className="flex items-center mb-4">
            <strong className="mr-2">Rating:</strong>
          </div>
          <div className="flex items-center mb-4">
            <strong className="mr-2">Price: ${price}</strong>
          </div>

          <button
            onClick={handleCart}
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-amber-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
