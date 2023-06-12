import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1" }),
  endpoints(builder) {
    return {
      signup: builder.mutation({
        query: (user) => {
          return {
            url: "/users/signup",
            body: user,
            method: "POST",
          };
        },
      }),

      signin: builder.mutation({
        query: (user) => {
          return {
            url: "/users/login",
            body: user,
            method: "POST",
          };
        },
      }),
    };
  },
});
