import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Akses variabel lingkungan dengan prefix yang benar

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
    getProduct: build.query({
      query: () => `/client/products`,
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetUserQuery, useGetProductQuery } = api;
