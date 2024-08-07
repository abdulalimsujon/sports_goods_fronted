import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckForm from "./CheckForm";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/features/CartSlice";

const stripePromise = loadStripe(
  "pk_test_51PkE6BP9qFBCtbagbn42WKTsw8mF1wEDTqZMCQtwsNwzT5xh9wAhUZQ8FIXiGf0yfZAzFSuB96h2bQzv8HYkWxZK00VTYfDQJc"
);

const CheckOut = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );
  };
  const [formData, setFormData] = useState({
    paymentMethod: "card", // Default payment method is card
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  });

  if (formData.paymentMethod === "cash") {
    Swal.fire({
      title: "Do you want to order?",
      showDenyButton: true,
      denyButtonText: `Cancel`,
      confirmButtonText: "Order",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Ordered successfully", "", "success");
        dispatch(clearCart());
        navigate("/");
      } else if (result.isDenied) {
        Swal.fire("Order cancelled", "", "info");
      }
    });
  }

  const [placeOrder, setPlaceOrder] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mt-16 mx-auto max-w-[1600px] h-screen px-4">
      <h1 className="text-2xl font-bold py-5">Checkout</h1>
      <div className="grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 gap-4">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 border p-12 bg-base-200">
          <div className="pt-5">
            <h3 className="text-xl font-bold mb-4">user information</h3>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full mt-3"
            />
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="text"
                placeholder="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full mt-3"
              />
              <input
                type="text"
                placeholder="Phone *"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered w-full mt-3"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-xl font-bold mb-4">Delivery Address</h3>
              <input
                type="text"
                placeholder="Country/Region*"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="input input-bordered w-full mt-3"
              />
              <input
                type="text"
                placeholder="Address*"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input input-bordered w-full mt-3"
              />
              <input
                type="text"
                placeholder="Apartment*"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
                className="input input-bordered w-full mt-3"
              />
              <div className="flex flex-col md:flex-row md:space-x-2">
                <input
                  type="text"
                  placeholder="City*"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="input input-bordered w-full mt-3"
                />
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="input input-bordered w-full mt-3"
                />
                <input
                  type="text"
                  placeholder="Zip Code*"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="input input-bordered w-full mt-3"
                />
              </div>
            </div>

            <button
              onClick={() => setPlaceOrder(!placeOrder)}
              className="w-full bg-primary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
            >
              Place Order
            </button>

            {placeOrder && (
              <div className="pt-5">
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-bold mb-3">Payment Method</h3>
                  <div className="mb-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Card Payment</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-2">Pay on Delivery</span>
                    </label>
                  </div>

                  {formData.paymentMethod === "card" && (
                    <Elements stripe={stripePromise}>
                      <CheckForm
                        formData={formData}
                        handleChange={handleChange}
                      />
                    </Elements>
                  )}
                  {formData.paymentMethod === "cash" && (
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Next
                    </button>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 border p-12 ">
          <h3 className="text-xl font-bold text-center">Your order details</h3>
          <div className="container pt-5 mx-auto">
            <div className="border mb-4">
              {cart?.map((item) => (
                <div
                  key={item.id}
                  className="border-b py-2 flex items-center justify-between px-6"
                >
                  <div className="flex items-center pr-2">
                    <img
                      style={{
                        height: "100px",
                        width: "100px",
                        marginRight: "15px",
                      }}
                      src={item.image}
                      alt={`${item.name}`}
                    />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p>× {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p>৳ {item.price}</p>
                    <p>
                      total: ৳ {calculateSubtotal(item.price, item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mt-4 text-right">
              <p className="text-xl font-bold">
                Subtotal + VAT 15%: ৳{" "}
                {(calculateTotal() + calculateTotal() * 0.15).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
