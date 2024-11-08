/* eslint-disable react/jsx-no-undef */
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import Badge from "./Badge";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/features/CartSlice";

const ProductCard = ({ product }) => {
  const { name, price, image, _id, stock_quantity } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="w-[300px] h-[400px] border relative bg-white group overflow-hidden">
      {/* Green Div Above Image */}
      <div className="absolute bottom-[-200px] left-0 w-[60px] h-[200px] z-50 group-hover:bottom-[50px] transform transition-all duration-500 ease-in-out">
        {stock_quantity === 0 && <Badge status="stock_out" />}
        <div className="mx-3 mt-20 ml-[250px]">
          {/* Icon 1: Eye Icon */}
          <button
            onClick={() => navigate(`/getSingleProduct/${_id}`)}
            className="bg-black text-white w-[40px] h-[40px] flex items-center justify-center rounded-md mb-4"
          >
            <IoEyeOutline size={30} />
          </button>

          {/* Icon 2: Heart Icon */}
          <div className="bg-black text-white w-[40px] h-[40px] flex items-center justify-center rounded-md mb-4">
            <FaRegHeart size={30} />
          </div>

          {/* Icon 3: Cart Icon */}
          <div
            onClick={() =>
              stock_quantity > 0 &&
              dispatch(
                addTocart({ id: _id, name, image, price, stock_quantity })
              )
            }
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
        <div className="text-gray-500">
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
    stock_quantity: PropTypes.number,
    rating: PropTypes.number,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
