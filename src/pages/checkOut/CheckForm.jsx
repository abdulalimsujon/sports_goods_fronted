import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CheckForm = () => {
  const stripe = useStripe();
  const [error, setError] = useState("");
  const [clientSecret, setSecret] = useState("");
  const elements = useElements();
  const { cart } = useSelector((state) => state.cart);
  const [transactionId, setTransactionId] = useState("");

  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/v1/create-checkout-session", {
        price: totalPrice,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setSecret(res.data.clientSecret);
      });
  }, [totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // step 1 create payment method

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error);
      setError(error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // step 2 --> set confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: "alimsujon12@gmail.com",
          },
        },
      });
    if (confirmError) {
      setError(confirmError);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-16">
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
      />
      <button
        className="btn btn-primary "
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      <p className="text-green-600">your transaction is : {transactionId}</p>
    </form>
  );
};

export default CheckForm;
