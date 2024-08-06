import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckForm from "./CheckForm";
import { loadStripe } from "@stripe/stripe-js";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    paymentMethod: "card", // Default payment method is card
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const stripePromise = loadStripe(
    "pk_test_51PkE6BP9qFBCtbagbn42WKTsw8mF1wEDTqZMCQtwsNwzT5xh9wAhUZQ8FIXiGf0yfZAzFSuB96h2bQzv8HYkWxZK00VTYfDQJc"
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mt-16 mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-6 h-screen overflow-y-auto">
          <div className="pt-5">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-primary w-full mt-3"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Email *"
                className="input input-bordered input-primary w-full mt-3 required"
              />
              <input
                type="text"
                placeholder="Phone *"
                className="input input-bordered input-primary w-full mt-3 required:"
              />
            </div>

            <div className="pt-5">
              <h3 className="text-xl font-bold mb-4">Delivery Address</h3>
              <input
                type="text"
                placeholder="Country/Region*"
                className="input input-bordered input-primary w-full mt-3 required:"
              />
              <input
                type="text"
                placeholder="Address*"
                className="input input-bordered input-primary w-full mt-3 required:"
              />
              <input
                type="text"
                placeholder="Apartment*"
                className="input input-bordered input-primary w-full mt-3 required:"
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="City*"
                  className="input input-bordered input-primary w-full mt-3 required:"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="input input-bordered input-primary w-full mt-3 required:"
                />
                <input
                  type="text"
                  placeholder="Zip Code*"
                  className="input input-bordered input-primary w-full mt-3 required:"
                />
              </div>
            </div>
            <div className="pt-5">
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold mb-4">Payment Method</h3>
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
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-4">Card Information</h3>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="cardName"
                      >
                        Name on Card
                      </label>
                      <input
                        id="cardName"
                        name="cardName"
                        type="text"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 input-primary"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="cardNumber"
                      >
                        Card Number
                      </label>
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 input-primary"
                        required
                      />
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 pr-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="expDate"
                        >
                          Expiration Date
                        </label>
                        <input
                          id="expDate"
                          name="expDate"
                          type="text"
                          value={formData.expDate}
                          onChange={handleChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 input-primary"
                          required
                        />
                      </div>
                      <div className="w-1/2 pl-2">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="cvv"
                        >
                          CVV
                        </label>
                        <input
                          id="cvv"
                          name="cvv"
                          type="text"
                          value={formData.cvv}
                          onChange={handleChange}
                          className="shadow appearance-none border rounded w-full py-2 px-3 input-primary"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Complete Checkout
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-span-6 h-screen fixed top-0 right-0">
          <div className="pt-5 px-6">
            <Elements stripe={stripePromise}>
              <CheckForm></CheckForm>
            </Elements>
            {/* Add more content here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
