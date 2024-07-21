import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Akses variabel lingkungan dengan prefix yang benar

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transaction"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
    getProduct: build.query({
      query: () => `/client/products`,
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => `/client/customers`,
      providesTags: ["Customers"],
    }),
    getTransaction: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "/client/transaction",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transaction"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductQuery,
  useGetCustomersQuery,
  useGetTransactionQuery,
} = api;
