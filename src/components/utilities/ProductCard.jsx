import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ProductRating from "./ProductRating";
import Badge from "./Badge";

const ProductCard = ({ product }) => {
  const { name, price, image, _id, rating, stock_quantity } = product;
  const navigate = useNavigate();

  const singlePage = async () => {
    navigate(`/getSingleProduct/${_id}`);
  };

  return (
    <div className="card card-compact bg-base-100 max-w-96 shadow-xl">
      {stock_quantity === 0 && <Badge status="stock_out" />}{" "}
      {/* Use comparison instead of assignment */}
      <figure style={{ height: "300px", width: "500px wrap-content" }}>
        <img
          style={{ height: "300px", width: "500px" }}
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-center">
            <h2 className="card-title">{name}</h2>
            <p className="font-semibold text-xl">price: ${price}</p>
            <p>
              <ProductRating stars={rating} />
            </p>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary hover:bg-amber-200"
              onClick={singlePage}
            >
              View details
            </button>
          </div>
        </div>
      </div>
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
