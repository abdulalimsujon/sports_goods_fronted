import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import {
  decreaseToCart,
  deleteToCart,
  increaseToCart,
} from "../../redux/features/CartSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const [disabled, setDisable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isDisabled = cart.some(
      (product) => product?.quantity > product?.stock_quantity
    );
    setDisable(isDisabled);
  }, [cart, disabled]);

  const GoAllProduct = () => {
    navigate("/allproducts");
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return cart?.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );
  };

  const handleIncreaseToCart = (item) => {
    if (item.quantity == item.stock_quantity) {
      toast.error("Stock out");
    } else {
      dispatch(increaseToCart({ id: item.id }));
    }
  };

  return (
    <div className="container mx-w-[1620] mt-8 max-w-7xl h-auto mx-auto mb-64">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-7 p-4">
          <table className="table-auto w-full border-collapse rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 md:px-4 py-2">Action</th>
                <th className="border px-2 md:px-4 py-2">Product</th>
                <th className="border px-2 md:px-4 py-2">Name</th>
                <th className="border px-2 md:px-4 py-2">Calculation</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="border text-center px-2 md:px-6 py-2">
                    <RiDeleteBin7Line
                      size={24}
                      onClick={() => dispatch(deleteToCart({ id: item.id }))}
                      className="text-black font-bold cursor-pointer hover:text-red-500"
                    />
                  </td>
                  <td className="border px-2 md:px-4 py-2 text-center">
                    <img
                      className="mx-auto"
                      style={{
                        height: "80px",
                        width: "80px",
                      }}
                      src={item.image}
                      alt={`${item.name}`}
                    />
                  </td>
                  <td className="border px-2 md:px-4 py-2 text-center">
                    <p>{item.name}</p>
                  </td>
                  <td className="border px-2 md:px-4 py-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() =>
                          dispatch(decreaseToCart({ id: item.id }))
                        }
                        className="bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300"
                      >
                        -
                      </button>
                      <p className="mx-2 text-sm md:text-base">
                        {item.price} X {item.quantity} ={" "}
                        {item.price * item.quantity}
                      </p>
                      <button
                        onClick={() => handleIncreaseToCart(item)}
                        className="bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300"
                        disabled={item.quantity > item.stock_quantity}
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="py-4">
                  <div
                    onClick={GoAllProduct}
                    className="text-amber-500 text-xl md:text-2xl flex justify-center items-center cursor-pointer space-x-1"
                  >
                    <FaArrowLeft className="mr-1" />
                    <p>Shop More</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lg:col-span-5 p-4">
          <div className="border p-6 rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Summary</h2>
            <div className="mb-2 flex justify-between">
              <p className="text-lg">Total Price:</p>
              <p className="text-lg">${calculateTotal().toFixed(2)}</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-lg">VAT (15%):</p>
              <p className="text-lg">${(calculateTotal() * 0.15).toFixed(2)}</p>
            </div>
            <div className="mb-4 flex justify-between font-bold">
              <p className="text-lg">Total with VAT:</p>
              <p className="text-lg">
                ${(calculateTotal() + calculateTotal() * 0.15).toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => navigate("/checkout")}
                disabled={disabled || cart.length <= 0}
                className={`w-full py-2 px-4 rounded text-white ${
                  !disabled && cart.length > 0
                    ? "bg-primary hover:bg-amber-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
