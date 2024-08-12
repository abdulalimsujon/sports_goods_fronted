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
        console.log("from the api", id);
        return {
          url: `/getSingleProduct/${id}`,
          method: "GET",
        };
      },
    }),
    addProduct: builder.mutation({
      query: (formData) => {
        return {
          url: "/create-product",
          method: "POST",
          body: formData,
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/delete-product/${id}`,
          method: "DELETE",
          body: { id },
        };
      },
    }),
    updateProduct: builder.mutation({
      query: (options) => {
        return {
          url: `/update-product/${options.id}`,
          method: "PATCH",
          body: options.data,
        };
      },
    }),
    deleteCartProduct: builder.mutation({
      query: (options) => {
        console.log("inside the api", options);
        return {
          url: `/update-cart-product`,
          method: "DELETE",
          body: options,
        };
      },
    }),
    getProductByName: builder.query({
      query: (searchTerm) => {
        return {
          url: `/get-products?searchTerm=${searchTerm}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useDeleteCartProductMutation,
  useGetProductByNameQuery,
} = baseApi;
