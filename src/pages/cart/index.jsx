import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import {
  decreaseToCart,
  deleteToCart,
  increaseToCart,
} from "../../redux/features/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <div className="container mx-auto mt-16 max-w-[1600px] h-[500px]">
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-6 p-4 md:col-span-12 sm:col-span-12">
          <table className="table-auto w-full border-collapse p-6 rounded-lg ">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Action</th>
                <th className="border px-4 py-2">Product</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Calculation</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="border text-center px-12  ">
                    <RiDeleteBin7Line
                      size={30}
                      onClick={() => dispatch(deleteToCart({ id: item.id }))}
                      className="text-black font-bold cursor-pointer hover:text-red-500"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <img
                      style={{
                        height: "100px",
                        width: "100px",
                        marginRight: "5px",
                      }}
                      src={item.image}
                      alt={`${item.name}`}
                    />
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <p>{item.name}</p>
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() =>
                          dispatch(decreaseToCart({ id: item.id }))
                        }
                        className="bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300"
                      >
                        -
                      </button>
                      <p className="mx-2">
                        {item.price} X {item.quantity} ={" "}
                        {item.price * item.quantity}
                      </p>
                      <button
                        onClick={() =>
                          dispatch(increaseToCart({ id: item.id }))
                        }
                        className="bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className=" py-4">
                  <div
                    onClick={GoAllProduct}
                    className="text-amber-500 text-2xl flex space-x-1"
                  >
                    <FaArrowLeft className="mt-1 mr-1" />
                    <p>Shop More</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lg:col-span-6 p-4 md:col-span-12 sm:col-span-12 ">
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
                disabled={cart.length <= 0}
                className={`w-full py-2 px-4 rounded text-white ${
                  cart?.length > 0
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
