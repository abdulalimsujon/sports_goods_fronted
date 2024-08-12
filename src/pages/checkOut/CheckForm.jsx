/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  useDeleteCartProductMutation,
  useGetProductsQuery,
} from "../../redux/api/api";
import { useNavigate } from "react-router-dom";
import LoaderSpinner from "../../components/utilities/LoaderSpinner";
import Toast from "../../components/utilities/Toast";
import { clearCart } from "../../redux/features/CartSlice";

const CheckForm = ({ formData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { cart } = useSelector((state) => state.cart);
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [deleteCartProduct, { isLoading, isError }] =
    useDeleteCartProductMutation();

  const { refetch } = useGetProductsQuery();

  // Fetching the client secret every time totalPrice changes
  useEffect(() => {
    if (totalPrice > 0) {
      axios
        .post("https://localhost:5000/api/v1/create-checkout-session", {
          price: totalPrice,
        })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [totalPrice]);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (isError) {
    Toast("Product update failed", "error");
    return null; // Early return if there's an error
  }

  const cartIds = cart?.map((item) => item.id);

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
        email: formData?.email,
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

      await deleteCartProduct({ cartIds });
      dispatch(clearCart());
      refetch();
      navigate("/");
      Toast("You ordered successfully", "success");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md mt-4"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
        Card Payment
      </h3>
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
        className="p-2 sm:p-3 md:p-4 border rounded-md mb-4"
      />
      <button
        className="w-full bg-primary text-white py-2 sm:py-3 md:py-4 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 hover:bg-primary-dark"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {error && (
        <p className="text-red-600 mt-4 text-center md:text-left">{error}</p>
      )}

      {transactionId && (
        <p className="text-green-600 mt-4 text-center md:text-left">
          Transaction ID: {transactionId}
          {console.log("rrrrr", transactionId)}
        </p>
      )}
    </form>
  );
};

export default CheckForm;
