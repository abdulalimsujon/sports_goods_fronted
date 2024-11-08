import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { IoEyeOutline, IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/features/CartSlice";
import Badge from "./Badge";
import ProductRating from "./ProductRating";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    image,
    _id,
    stock_quantity,
    description,
    rating,
    brand,
    category,
  } = product;
  const dispatch = useDispatch();
  const [showOverlay, setShowOverlay] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleEyeClick = () => setShowOverlay(true);
  const handleCloseOverlay = () => setShowOverlay(false);

  const handleAddToCart = () => {
    if (stock_quantity > 0) {
      setShowToast(true);
      dispatch(addTocart({ id: _id, name, image, price, stock_quantity }));

      navigate("/cart");
    }
  };

  // Hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="w-[300px] h-[400px] border relative bg-white group overflow-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
          Added to cart successfully!
        </div>
      )}

      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-[80%] max-w-[800px] flex">
            <div className="w-1/2 flex items-center justify-center">
              <img
                src={image}
                alt={name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-8">
              <button
                onClick={handleCloseOverlay}
                className="absolute top-4 right-4 text-gray-200 hover:text-gray-800 bg-black p-4"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">{name}</h2>
              <p className="text-gray-700 mb-2">Price: ${price}</p>
              <p className="text-gray-700 mb-2">Description: {description}</p>
              <p className="text-gray-700 mb-2">
                Rating: <ProductRating rating={rating} />
              </p>
              <p className="text-gray-700 mb-2">
                Stock: {stock_quantity} available
              </p>
              <p className="text-gray-700 mb-2">Brand: {brand}</p>
              <p className="text-gray-700 mb-2">Category: {category}</p>
              <button
                onClick={handleAddToCart}
                className={`mt-4 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-300 ${
                  stock_quantity === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={stock_quantity === 0}
              >
                {stock_quantity > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Green Div Above Image */}
      <div className="absolute bottom-[-200px] left-0 w-[60px] h-[200px] z-50 group-hover:bottom-[50px] transform transition-all duration-500 ease-in-out">
        {stock_quantity === 0 && <Badge status="stock_out" />}
        <div className="mx-3 mt-20 ml-[250px]">
          <button
            onClick={handleEyeClick}
            className="bg-black text-white w-[40px] h-[40px] flex items-center justify-center rounded-md mb-4"
          >
            <IoEyeOutline size={30} />
          </button>
          <div className="bg-black text-white w-[40px] h-[40px] flex items-center justify-center rounded-md mb-4">
            <FaRegHeart size={30} />
          </div>
          <div
            onClick={handleAddToCart}
            className={`bg-black text-white w-[40px] h-[40px] flex items-center justify-center rounded-md mb-4 ${
              stock_quantity === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            <IoCartOutline size={30} />
          </div>
        </div>
      </div>

      {/* Image as background */}
      <div className="absolute inset-0 z-0">
        <img
          style={{ height: "300px", width: "500px" }}
          src={image}
          alt="Shoes"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Hover Content */}
      <div className="w-full h-[120px] bg-gray-200 absolute mt-[280px] z-10">
        <div className="text-gray-500 group-hover:text-amber-400 transition-colors duration-300">
          <h1 className="text-center">{name}</h1>
          <h1 className="text-center">$ {price}</h1>
        </div>
      </div>

      {/* Slide-in Content */}
      <div className="w-[300px] h-[280px] border absolute bg-gray-50 bg-opacity-30 backdrop-blur-none transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-20"></div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    brand: PropTypes.string,
    stock_quantity: PropTypes.number,
    rating: PropTypes.number,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
