import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseToCart: (state, action) => {
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      // if (existingProductIndex !== -1) {
      //   if (state.cart[existingProductIndex].quantity >= 0) {
      //     state.cart[existingProductIndex].price = 0;
      //   }
      // }
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity -= 1;
      }
    },
    increaseToCart: (state, action) => {
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += 1;
      }
    },
    deleteToCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addTocart, decreaseToCart, increaseToCart, deleteToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
