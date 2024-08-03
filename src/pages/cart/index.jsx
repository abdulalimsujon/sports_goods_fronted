import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin7Line } from "react-icons/ri";
import {
  decreaseToCart,
  deleteToCart,
  increaseToCart,
} from "../../redux/features/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto mt-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 p-4">
          <table className="table">
            <thead>
              <tr>
                <th>Action</th>
                <th>product</th>
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
                    <h1 className="mt-12 text-black font-bold">{item.name}</h1>
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
        <div className="col-span-6 bg-gray-300 p-4">
          <h1>CHECK OUT </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
