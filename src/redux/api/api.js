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
    getProductBySearch: builder.query({
      query: (searchTerm) => {
        return {
          url: `/get-products?searchTerm=${searchTerm}`,
          method: "GET",
        };
      },
    }),

    getProductWithPrice: builder.query({
      query: (price) => {
        return {
          url: `/get-products?price=${price}`,
          method: "GET",
        };
      },
    }),
    getFilterProducts: builder.query({
      query: ({ category, price, brand, rating, searchTerm, sort }) => {
        // Create a new URLSearchParams object
        const params = new URLSearchParams();

        //  console.log("insided the api", category, price, brand, searchTerm);
        // Conditionally append query parameters if they are provided
        if (category) {
          params.append("category", category);
        }
        if (price) {
          params.append("price", price);
        }
        if (brand) {
          params.append("brand", brand);
        }
        if (rating) {
          params.append("rating", rating);
        }
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (sort) {
          params.append("sort", sort);
        }

        return {
          url: `/get-products?${params.toString()}`, // Construct the URL with the query string
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
  useGetProductBySearchQuery,
  useGetFilterProductsQuery,
  // useGetFieldBySearchQuery,
  useClearFiltersQuery,
  useGetProductWithPriceQuery,
} = baseApi;
