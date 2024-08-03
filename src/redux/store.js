import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import cartRedu from "./features/CartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartRedu,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
