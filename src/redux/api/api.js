import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/getAllProduct",
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/getSingleProduct/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = baseApi;
