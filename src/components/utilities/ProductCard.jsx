import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, image, _id } = product;
  const navigate = useNavigate();

  const singlePage = async () => {
    navigate(`/getSingleProduct/${_id}`);
  };

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold text-xl">price: ${price}</p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-primary hover:bg-amber-600"
            onClick={singlePage}
          >
            View details
          </button>
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
