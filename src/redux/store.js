import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import cartRedu from "./features/CartSlice";
import QuerySlice from "./features/QuerySlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartRedu,
    query: QuerySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
