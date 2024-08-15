import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import cartRedu from "./features/CartSlice";
import filterSlice from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartRedu,
    filters: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
