import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin7Line } from "react-icons/ri";
import {
  decreaseToCart,
  deleteToCart,
  increaseToCart,
} from "../../redux/features/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const GoAllProduct = () => {
    navigate("/allproducts");
  };

  return (
    <div className="container mx-auto mt-16 ">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 p-4 mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Action</th>
                <th>product</th>
                <th>Name</th>
                <th>Calculation</th>
              </tr>
            </thead>
            <tbody>
              {cart?.cart?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <RiDeleteBin7Line
                      size={30}
                      onClick={() => dispatch(deleteToCart({ id: item.id }))}
                      className="text-black font-bold"
                    />
                  </td>
                  <td className="flex">
                    <img
                      style={{
                        height: "100px",
                        width: "100px",
                        marginRight: "5px",
                      }}
                      src={item.image}
                      alt={`${item.name}`}
                    ></img>
                  </td>

                  <td>
                    <p>{item.name}</p>
                  </td>

                  <td>
                    <button
                      onClick={() => dispatch(increaseToCart({ id: item.id }))}
                      className="text-3xl "
                    >
                      +
                    </button>
                    <p>
                      {item.price} X {item.quantity} ={" "}
                      {item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => dispatch(decreaseToCart({ id: item.id }))}
                      className="text-3xl "
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center space-x-56">
        <button
          onClick={GoAllProduct}
          className="bg-primary text-white py-2 px-4 rounded hover:bg-amber-600"
        >
          shop more
        </button>
        <button className="bg-primary text-white py-2 px-4 rounded hover:bg-amber-600">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
