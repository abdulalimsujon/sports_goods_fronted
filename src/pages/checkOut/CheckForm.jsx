import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const CheckForm = ({ formData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { cart } = useSelector((state) => state.cart);
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

  console.log("this is form data", formData);

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/v1/create-checkout-session", {
        price: totalPrice,
      })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        email: formData.email,
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

    if (confirmError) {
      setError(confirmError.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mt-4"
    >
      <h3 className="text-xl font-semibold mb-4">Card Payment</h3>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        className="p-3 border rounded-md mb-4"
      />
      <button
        className="w-full bg-primary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 hover:bg-primary-dark"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Place Order
      </button>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {transactionId && (
        <p className="text-green-600 mt-4">Transaction ID: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckForm;
